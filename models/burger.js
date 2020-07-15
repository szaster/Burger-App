// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

/////Burger model object//////
const burger = {
  selectAllBurgers: (callback) => {
    orm.selectAll("burgers", (result) => {
      callback(result);
    });
  },

  insertNew: (cols, vals, callback) => {
    //Execute orm function insertone to post data into database
    orm.insertOne("burgers", cols, vals, (result) => {
      console.log("Insert new burger done");
      callback(result);
    });
  },
  updateOneBurger: (cols, vals, condition, callback) => {
    orm.updateOne("burgers", cols, vals, condition, (result) => {
      callback(result);
    });
  },
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
