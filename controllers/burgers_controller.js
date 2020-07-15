const express = require("express");
// Create router for the app, call an instance of the express.Router(),
// appy Routes toit, and then tell the app to use these routes
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burgerModel = require("../models/burger.js");

// Create all routes and set up logic within those routes

// GET routes

router.get("/", function (req, res) {
  burgerModel.selectAllBurgers((data) => {
    let handlebarsObject = {
      burger: data,
    };
    console.log("Displayed Burgers", handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

// POST routes used to insert new burgers
router.post("/api/burger", function (req, res) {
  // add defauft devour values
  const burger = { name: req.body.burger_name, devoured: false };
  burgerModel.insertNew(burger, function (result) {
    //send back the id of a new burger
    console.log(result.insertId);
    res.status(200).json({ id: result.insertId });
  });
});

// UPDATE routes

router.put("api/burger/:id", function (req, res) {
  const burgerID = req.params.id;
  const condition = "id =" + burgerID;
  console.log("condition", condition);
  console.log("Devoured state:", req.body.devoured);

  burgerModel.updateOneBurger(
    ["devoured"],
    [req.body.devoured],
    condition,
    (result) => {
      //Send back the ID of updated burger
      res.json(result);
    }
  );
});

module.exports = router;
