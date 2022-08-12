const mysql = require('mysql2/promise');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST || 'localhost',
  user: DB_USER || 'root',
  password: DB_PASSWORD || 'password',
  port: DB_PORT || 3306,
  database: DB_DATABASE || 'StoreManager',
});

module.exports = connection;