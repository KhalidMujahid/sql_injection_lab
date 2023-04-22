const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "khalid",
  password: "password",
  database: "test2",
});

db.connect((error) => {
  if (error) throw error;
  console.log("DB connected!");
});

module.exports = db;
