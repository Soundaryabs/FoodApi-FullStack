module.exports = {};
module.exports = {};

const Recipes = require("../model/recipes");
const assert = require("assert");

module.exports = {
  getRecipes: (req, res) => {
    Recipes.find((err, response) => {
      if (err) assert.equal(err, null);
      res.json(response);
    });
  },
  createRecipes: (req, res) => {
    let recipes = new Recipes(req.body);

    recipes
      .save()
      .then((item) => {
        res.status(200).json({ msg: "Recipes added successfully" });
      })
      .catch((err) => {
        res.status(400).send("Unable to Save value to the database");
      });
  },
  getSingleRecipes: (req, res) => {
    let id = req.params.id;
    Recipes.findById(id, function (err, response) {
      res.json(response);
    });
  },
  deleteRecipes: (req, res) => {
    Recipes.findByIdAndDelete({ _id: req.params.id }, function (err, response) {
      if (err) res.send(err);
      else res.json("Successfully deleted");
    });
  },
};
