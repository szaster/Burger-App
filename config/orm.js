const connection = require("./config.connection.js");

const tableName = "burgers";

////Helper function///////
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var array = [];
  for (var i = 0; i < num; i++) {
    array.push("?");
  }
  return array.toString();
}

//ORM Object for all SQL statement functions
const orm = {
  selectAll: function (tableName, callback) {
    const querySring = `SELECT * FROM ${tableName};`;
    connection.query(querySring, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function (tableName, cols, vals, callback) {
    const querySring = `INSERT INTO ${tableName} (${cols.toString()})
    VALUES (${printQuestionMarks(vals.length)});`;

    connection.query(querySring, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Added");
      callback(result);
    });
  },
};

module.exports = orm;
