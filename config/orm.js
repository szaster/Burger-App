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

// Used to conditionally insert quotes if value is a string;
function formatValues(val) {
  if (typeof val === "string") {
    return `'${val}'`;
  } else {
    return `${val}`;
  }
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

  insertOne: function (tableName, columns, values, callback) {
    // using array's join to concatenate array
    const sqlCols = `(${columns.join(",")})`;
    const sqlVals = `(${values.map(formatValues).join(",")})`;
    const queryString = `INSERT INTO ${tableName} ${sqlCols} VALUES ${sqlVals}`;

    // INSERT INTO burgers (burger_name, devoured) VALUES ('Vegetarian', true);
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Added");
      callback(result);
    });
  },
  updateOne: function (tableName, column, value, condition, callback) {
    const querySring = `Update ${tableName} SET ${column} = ${value} WHERE ${condition};`;
    connection.query(querySring, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
};
///Export orm
module.exports = orm;
