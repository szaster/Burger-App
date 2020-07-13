// Set up MySQL connection.
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "EmnvaznkzN7!",
  database: "best_burgers_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting", err.stack);
    return;
  }
  console.log("connected as id", connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
