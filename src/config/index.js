const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

db.connect((error) => {
  if (error) throw error;
  console.log("DB connected!");
});

module.exports = db;
