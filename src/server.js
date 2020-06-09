const express = require("express");
const server = express();

//Configurar pasta publica
server.use(express.static("public"));

//Utilizando tamplate engine
const nunjucks = require("nunjucks");
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
  return response.render("create-point.html");
});

server.get("/search", (request, response) => {
    return response.render("search-results.html");
  });

//Ligar o servidor
server.listen(3000);
