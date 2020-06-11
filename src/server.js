const express = require("express");
const server = express();

//Pegar o bando de dados
const db = require("./database/db.js");

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

  console.log(request.query);




  return response.render("create-point.html");
});





server.get("/search", (request, response) => {

  //Pegar os dados do bando de dados

  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estão seus registros: ");
    console.log(rows);

    const total = rows.length

    //Mostrar a página html com os dados do bando de dados

    return response.render("search-results.html", { places: rows, total: total});
  });

  
});

//Ligar o servidor
server.listen(3000);
