const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todos_db",
  })
  .promise();

module.exports = connection;
