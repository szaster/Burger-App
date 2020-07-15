const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set for Express and Heroku

let PORT = process.env.PORT || 8000;

// Serve Static Content Such as CSS, JS, for the App from the "public"
// directory in the Application Directory.
app.use(express.static("public"));
// Parse application body as JSON.
// Adds Additional Functionality to Express Using Middleware body-parser
app.use(express.urlencoded({ extended: true })); //???
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/burgers_controller");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
