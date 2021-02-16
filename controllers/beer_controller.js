var express = require("express");
var router = express.Router();
var beer = require("../models/beer.js");
var db = require("../models");


////////////////////   POST   ///////////////////////////////////
router.post('/api/beers/create', async (req, res) => {
  const newBeer = await db.beer.create({
    beer_name: req.body.beer_name,
 
  });
  console.log(newBeer);


 

  // try {
  //   const dbBeer = await newBeer.save();
  //   res.redirect('/');
  // } catch (err) {
  //   res.status(500).json(err);
  // }

});


// router.post("/api/beers/create", (req, res) => {
//   beers.create(["beer_name"], [req.body.beer_name], (result) => {
//     res.json({ id: result.insertId });
//   });
// });

////////////////////   PUT   ///////////////////////////////////
router.put("/beers/ordered/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  beer.update({ ordered: req.body.ordered },
    condition,
    (result) => {
      res.json(result)
    }
  );
  
});

module.exports = router;