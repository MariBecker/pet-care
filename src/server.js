const express = require("express");
const server = express();

//Configurar pasta publica
server.use(express.static("public"));

//Configurar caminhos da minha aplicação
//Página inicial

server.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

server.get("/create-point", (request, response) => {
    response.sendFile(__dirname + "/views/create-point.html");
  });

//Ligar o servidor
server.listen(3000);
