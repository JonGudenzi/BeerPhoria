var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var Sequelize = require("sequelize");

module.exports = function (app) {

  app.get("/", function (req, res) {

    db.beer.findAll({}).then(data => {
      var hbsObject = {
        beerData: data
      };
      res.render("index", hbsObject);
    });
  });

  app.get("/beers/:query", function (req, res) {
    if (req.params.query) {
      db.beer.findAll({
        where: {
          beer_name: {
            [Sequelize.Op.like]: `%${req.params.query}%`
          }
        }
      }).then(data => {
        console.log(data);
        var hbsObject = {
          beerData: data
        };
        res.render("index", hbsObject);
      });
    }
   
  });

  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
