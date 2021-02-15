require('dotenv').config();
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var PORT = process.env.PORT || 8000;

var app = express();

//Sever static content for the app from the "public" directory in the app directory.
app.use(express.static("public"));
var db = require("./models");

//Parse application body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "keyboard beer", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/beer-api-routes.js")(app);

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/beer_controller.js");
// app.use(routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });
});


