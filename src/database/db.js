//Importar a depéndência do sqlite3

const sqlite3 = require("sqlite3").verbose();node

//Criar o obejto que irá fazer operações no bando de dados

const db = new sqlite3.Database("./src/database/database.db");
