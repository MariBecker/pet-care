//Importar a depéndência do sqlite3

const sqlite3 = require("sqlite3").verbose();

//Criar o obejto que irá fazer operações no bando de dados

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db

//Utilizar o objeto de bando de dados, para as interações

//db.serialize(() => {



  //Criar uma tabela com comandos SQl
  //db.run(`
  //CREATE TABLE IF NOT EXISTS places (
  //id INTEGER PRIMARY KEY AUTOINCREMENT,
  //image TEXT,
  //name TEXT,
  //address TEXT,
  //address2 TEXT,
  //state TEXT,
  //city TEXT,
  //items TEXT
  //);
  //`);
  //Inserir dados na tabela
  //const query = `
  //INSERT INTO places(
  //image,
  //name,
  //address,
  //address2,
  //state,
  //city,./src/database/database.dbSra. da Boa Viagem",
  // "Nº 184",
  // "Rio Grande do Sul",
  //"Cachoeirinha",
  // "Medicamentos",
  // ];
  //function afterInsertData(err) {
  //if (err) {
  //return console.log(err);
  //}
  //console.log("Cadastrado feito com sucesso");
  //console.log(this);
  //}
  //db.run(query, values, afterInsertData);

  //Consultar os dados da tabela

  //db.all(`SELECT * FROM places`, function (err, rows) {
  //if (err) {
  //return console.log(err);
  //}
  //console.log("Aqui estão seus registros: ");
  //console.log(rows);
  //});



  //Deletar um dado da tabela
  //db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
  //if (err) {
  //return console.log(err);
  //}
  //console.log("Registro deletado com sucesso!");
 // });
//});
