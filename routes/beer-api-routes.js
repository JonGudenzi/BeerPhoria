var db = require("../models");

module.exports = function(app) {
  app.get("/api/beer", function(req, res) {
    var query = {};
    console.log(req.query.q);
    if (req.query.q) {
      query.beer_name = req.query.q;
      res.redirect("/beers/"+req.query.q);
    }
  });
  
  app.get("/api/beer/:id", function(req, res) {
    db.beer.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });
  app.delete("/api/beer/:id", function(req, res) {
    db.beer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });
 
  app.put("/api/beer", function(req, res) {
    db.beer.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });
};