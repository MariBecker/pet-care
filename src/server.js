const express = require("express");
const server = express();

//Pegar o bando de dados
const db = require("./database/db.js");

//Configurar pasta publica
server.use(express.static("public"));

//Habilitar o uso do request.body na nossa aplicação

server.use(express.urlencoded({ extended: true }));

//Utilizando tamplate engine
const nunjucks = require("nunjucks");
const { request, response } = require("express");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//Configurar caminhos da minha aplicação
//Página inicial

server.get("/", (request, response) => {
  return response.render("index.html");
});

server.get("/create-point", (request, response) => {
  //console.log(request.query);

  return response.render("create-point.html");
});

server.post("/savepoint", (request, response) => {
  //console.log(request.body)

  //Inserir dados no banco de dados

  const query = `
  INSERT INTO places(
  image,
  name,
  address,
  address2,
  state,
  city,
  items
   ) VALUES(?,?,?,?,?,?,?);
   `;

  const values = [
    request.body.image,
    request.body.name,
    request.body.address,
    request.body.address2,
    request.body.state,
    request.body.city,
    request.body.items,
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
      return response.send("Erro no cadasatro!");
    }
    console.log("Cadastrado com sucesso");
    console.log(this);

    return response.render("create-point.html", { saved: true });
  }
  db.run(query, values, afterInsertData);
});

server.get("/search", (request, response) => {
  const search = request.query.search;

  if (search == "") {
    //Pesquisa vazia

    return response.render("search-results.html", { total: 0 });
  }

  //Pegar os dados do bando de dados

  db.all(`SELECT * FROM places WHERE state LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estão seus registros: ");
    console.log(rows);

    const total = rows.length;

    //Mostrar a página html com os dados do bando de dados

    return response.render("search-results.html", {
      places: rows,
      total: total,
    });
  });
});

//Ligar o servidor
server.listen(3000);
