// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgerTableName = "burgers";

/////Burger model object//////
const burger = {
  selectAllBurgers: (callback) => {
    orm.selectAll(burgerTableName, (result) => {
      callback(result);
    });
  },

  insertNew: (burger, callback) => {
    const name = burger.name;
    const devoured = burger.devoured;
    //Execute orm function insertone to post data into database
    const columns = ["burger_name", "devoured"];
    const values = [name, devoured];
    orm.insertOne(burgerTableName, columns, values, (result) => {
      console.log("Insert new burger done");
      callback(result);
    });
  },
  updateOneBurger: (cols, vals, condition, callback) => {
    orm.updateOne(burgerTableName, cols, vals, condition, (result) => {
      callback(result);
    });
  },
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
