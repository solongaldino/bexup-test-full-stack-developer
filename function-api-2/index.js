const functions = require("@google-cloud/functions-framework");
const axios = require("axios");
const { uid } = require("uid");
const pg = require("pg");

functions.http("helloHttp", async (req, res) => {
  const lenghtId = 36;

  const brand = {
    id: uid(lenghtId),
    code: req.body.codigo,
    name: req.body.nome,
  };

  let response;

  try {
    response = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${String(
        brand.code
      )}/modelos`
    );
  } catch (e) {
    console.error(e);
  }

  const models = response.data.modelos.map((item) => {
    return {
      id: uid(lenghtId),
      brandId: brand.id,
      code: item.codigo,
      name: item.nome,
    };
  });

  let client;

  try {
    client = new pg.Client({
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    });

    const insertBrandText =
      "INSERT INTO public.brand(id, name, code) VALUES($1, $2, $3)";

    const insertBrandValues = [brand.id, brand.name, brand.code];

    const insertModelText =
      "INSERT INTO public.model(id, brand_id, name, code) VALUES($1, $2, $3, $4)";

    const insertModelValues = models.map((item) => {
      return [item.id, brand.id, item.name, item.code];
    });

    await client.connect();

    await client.query("BEGIN");

    await client.query(insertBrandText, insertBrandValues);

    for (const values of insertModelValues) {
      await client.query(insertModelText, values);
    }

    await client.query("COMMIT");

    await client.end();
    res.status(201).send({
      message: `Veiculos da marca ${brand.name} cadastrados com sucesso!`,
    });
  } catch (e) {
    await client.query("ROLLBACK");
    await client.end();
    console.error(e);
  }
});
