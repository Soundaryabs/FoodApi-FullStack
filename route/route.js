const express = require("express");

// create an object ref for Router class
const appRoute = express.Router();

const categoryController = require("../controller/category.controller");
const recipeController = require("../controller/recipe.controller");
const ingredientsController = require("../controller/ingredients.controller");

// get path
appRoute.route("/recipes").get(recipeController.getRecipes);
appRoute.route("/categories").get(categoryController.getCategory);
appRoute.route("/ingredients").get(ingredientsController.getIngredients);

// single item
appRoute.route("/recipes/:id").get(recipeController.getSingleRecipes);
appRoute.route("/categories/:id").get(categoryController.getSingleCategory);
appRoute
  .route("/ingredients/:id")
  .get(ingredientsController.getSingleIngredients);

// post path
appRoute.route("/recipes").post(recipeController.createRecipes);
appRoute.route("/categories").post(categoryController.createCategory);
appRoute.route("/ingredients").post(ingredientsController.createIngredients);

// delete path
appRoute.route("/recipes/:id").delete(recipeController.deleteRecipes);
appRoute.route("/categories/:id").delete(categoryController.deleteCategory);
appRoute
  .route("/ingredients/:id")
  .delete(ingredientsController.deleteIngredients);

module.exports = appRoute;
