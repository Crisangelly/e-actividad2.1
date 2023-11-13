require('dotenv').config()
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

connection.connect()

module.exports = connection