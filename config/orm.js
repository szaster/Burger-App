const connection = require("./connection.js");

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
  insertOne: function (burger, callback) {
    //const querySring = `INSERT INTO ${tableName} (${cols.toString()})
    // (${printQuestionMarks(vals.length)});`;

    // const vals = { name: "Vegitarian", devoured: true };

    const columns = "(burger_name, devoured)";
    const values = `('${burger.name}', ${burger.devoured})`;
    const queryString = `INSERT INTO ${tableName} ${columns} VALUES ${values}`;

    // INSERT INTO burgers (burger_name, devoured) VALUES ('Vegetarian', true);
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Added");
      callback(result);
    });
  },
  updateOne: function (tableName, cols, vals, condition, callback) {
    const querySring = `Update ${tableName} SET ${col.toString()} = ? WHERE ${place}`;

    connection.query(querySring, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Updated");
      callback(result);
    });
  },
};
///Export orm
module.exports = orm;
