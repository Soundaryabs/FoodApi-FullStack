module.exports = {};

const Ingredients = require("../model/ingredients");
const assert = require("assert");

module.exports = {
  getIngredients: (req, res) => {
    Ingredients.find((err, response) => {
      if (err) assert.equal(err, null);
      res.json(response);
    });
  },
  createIngredients: (req, res) => {
    let ingredients = new Ingredients(req.body);

    ingredients
      .save()
      .then((item) => {
        res.status(200).json({ msg: "Ingredients added successfully" });
      })
      .catch((err) => {
        res.status(400).send("Unable to Save value to the database");
      });
  },
  getSingleIngredients: (req, res) => {
    let id = req.params.id;
    Ingredients.findById(id, function (err, response) {
      res.json(response);
    });
  },
  deleteIngredients: (req, res) => {
    Ingredients.findByIdAndDelete({ _id: req.params.id }, function (
      err,
      response
    ) {
      if (err) res.send(err);
      else res.json("Successfully deleted");
    });
  },
};
