const functions = require("@google-cloud/functions-framework");
const axios = require("axios");

functions.http("helloHttp", (req, res) => {
  const brand = req.body;

  res.send(`Hello ${req.query.name || req.body.name || "World"}!`);
});
