// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  const array = [];
  for (var i = 0; i < num; i++) {
    array.push("?");
  }
  return array.toString();
}

a = ["a", "d", 3];
console.log(printQuestionMarks(5));
