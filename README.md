<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Teste para desenvolvedor Sr Bexup</h3>

  <p align="center">
    Consumo da tabela fipe.
    <br />
  </p>
</p>

## Tabela de Conteúdo

- [Sobre o projeto](#sobre-o-projeto)
  - [Stack](#stack)
- [Iniciando](#iniciando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Uso](#uso)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Aplicação desenvolvida para atender os requisitos de um teste para uma vaga de desenvolvedor full-satck Sr, o escopo aborda o consumo da tabela fipe via api1 Nodejs, solicitando a listagem de marcas e procesando uma a uma em uma fila do GCP Cloud Task, assim o payload da fila pode ser consumindo por uma api2, no qual foi implantado uma função lambda no GCP Cloud Functions que manipula os dados e salva no PostgresSQL. O front contruido com Vueify consome a ap1 listando modelos a partir de uma marca selecionada.

Api1

<ul>
  <li>Registra marcas na fila obtidas na api da Fipe</li>
  <li>Lista marcas</li>
  <li>Lista modelos de uma marca</li>
</ul>

Api2 - Function Lambda

<ul>
  <li>Recebe marca da fila e busca todos os modelos na Fipe</li>
  <li>Salva marcas e modelos no banco de dados</li>
</ul>

Web/Frontend

<ul>
  <li>Lista marcas em um botão Select</li>
  <li>Lista modelos de uma marca selecionada</li>
  <li>Lista modelos a partir de uma string fornecida em formulário</li>
</ul>

### Stack

Essa seção lista as principais tecnologias/pacotes/bibliotecas utilizadas pela aplicação.

Api1:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/compose-file/)
- [Pgadmin](https://www.pgadmin.org/)
- [Postgres](https://www.postgresql.org/)
- [Nodejs](https://nodejs.org)
- [GCP](https://cloud.google.com/)
- [Typescript](https://www.typescriptlang.org/)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [Pismajs](https://axios-http.com/ptbr/docs/intro)
- [tsyringe](https://www.npmjs.com/package/tsyringe)
- [joi validator](https://joi.dev/)
- [Express](https://joi.dev/)
  ...Consulte /api1/package.json para obter todas as libs

Função Lambda:

- [GCP](https://cloud.google.com/)
- [Postgres](https://www.postgresql.org/)
- [pg](https://www.npmjs.com/package/pg)
- [uid](https://www.npmjs.com/package/uid)
- [axios](https://axios-http.com/ptbr/docs/intro)

Web:

- [Vuetify](https://vuetifyjs.com/en/)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [Typescript](https://www.typescriptlang.org/)

OBS: Alguns recusos utilizaram imagem Docker.

## Iniciando

Abaixo há as instruções para configurar o projeto localmente.

Para gerar uma cópia local funcional, os seguintes passos devem ser seguidos:

### Pré-requisitos

E obrigatorio possuir instalado em sua maquina:

<ul>
  <li>Docker com verção superior ou igual 20.10.12</li>
  <li>Docker Compose com verção superior ou igual 1.29.2</li>
  <li>Nodejs >= 16</li>
</ul>

### Instalação

1. Clone o repositório

```sh
git clone git@github.com:solongaldino/bexup-test-full-stack-developer.git

```

## Uso

#### Uso da api1

1. Navegue para o diretorio /api1

2. Instale as dependências:

```sh
npm ci
```

3. Gere as entidades:

```sh
npx prisma generate
```

4. Levante a aplicação:

```sh
npm start
```

#### Uso do Web/Frontend

1. Navegue para o diretorio /bexup-web

2. Instale as dependências:

```sh
npm ci
```

4. Levante a aplicação:

```sh
npm start
```

**Consideramos que você tenha o minimo de conhecimento no GCP**

1. Crie uma fila no cloud tasks
2. Crie uma conta de serviço no IAM para a fila com papel de executor do cloud tasks
3. Crie uma função no cloud functions copie os arquivos de /function-api-2 e cole no console GCP
4. Insira as credencias atraves de variaves de ambiente em api1 criando um arquivo .env edite .env.exemple
5. Levante a aplicação api1
6. Para interagir com a API será nescessario utilizar algum cliente:

Exemplo de clientes:

- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

**Recomendado Insomnia**

No projeto contem o arquivo para importação contendo toda coleção de rotas.

**Comucação**

Request e Response em:

Content-Type: application/json; charset=UTF-8

**Rotas de api1**

<ul>
  <li>
    Registra marcas na fila
    <br/>
    <ul>
      <li><strong>metodo: </strong>POST</li>
      <li><strong>url: </strong>http://localhost:3333/brands/register</li>
      <li><strong>reponse: </strong>void</li>
      <li><strong>status: </strong>201</li>
    </ul>
  </li>
  <br/>
  <li>
    Lista marcas
    <br/>
    <ul>
      <li><strong>metodo: </strong>GET</li>
      <li><strong>url: </strong>http://localhost:3333/brands/list-all</li>
      <li>
        <strong>response: </strong>
        <br/>
        <ul>
          <li><strong>Tipo: </strong>Array de objetos</li>
          <li><strong>Exemplo: </strong>
          <br/>
          [
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "e9dfc5ebf3cc0d68fb639c2d7ee201f112df",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Audi",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": 6
            &nbsp;&nbsp;&nbsp;&nbsp;},
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "c5ebf3cc0d68fb639c2d7ee201f112df95e5",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "BMW",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": 7
            &nbsp;&nbsp;&nbsp;&nbsp;}
            <br/>
            ]
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <br/>
  <li>
    Lista modelos a partir de uma marca ou palavra para busca
    <br/>
    <ul>
      <li><strong>metodo: </strong>GET</li>
      <li><strong>url: </strong>http://localhost:3333/models/list/:brandName</li>
      <li><strong>parametro de url: </strong>brandName(String)</li>
      <li>
        <strong>response: </strong>
        <br/>
        <ul>
          <li><strong>Tipo: </strong>Array de objetos</li>
          <li><strong>Exemplo: </strong>
          <br/>
          [
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "2f4a939be367239a6209b1dd1440381e1960",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"brand_id": "82f4a939be367239a6209b1dd1440381e196",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Aerostar Mini-Van 3.8",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": 655
            &nbsp;&nbsp;&nbsp;&nbsp;},
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": "4a939be367239a6209b1dd1440381e196006",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"brand_id": "82f4a939be367239a6209b1dd1440381e196",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Belina GL 1.8 / 1.6",
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"code": 657
            &nbsp;&nbsp;&nbsp;&nbsp;}
            <br/>
            ]
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

**Modelagem do banco de dados**
<br/><br/>
<img src="/doc/schema-db.png">
<br/><br/>

- O script de inicialização encontra-se em:

```sh
create-db.sql
```

<!-- CONTACT -->

## Contato

Solon Galdino - solonfisicaufpb@gmail.com

_Link do Projeto: [Github](https://github.com/solongaldino/bexup-test-full-stack-developer)_
