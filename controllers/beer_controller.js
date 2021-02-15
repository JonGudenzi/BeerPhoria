var express = require("express");
var router = express.Router();
var beer = require("../models/beer.js");

router.post('/api/beers/create', async (req, res) => {
  const newBeer = new db.beers({
    beer_name: req.body.beer_name,
  });
  try {
    const dbBeer = await newBeer.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/beers/ordered/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  beer.update({ ordered: req.body.ordered },
    condition,
    (result) => {
      res.json(result)
    }
  );
  console.log("condition", condition);
});

module.exports = router;