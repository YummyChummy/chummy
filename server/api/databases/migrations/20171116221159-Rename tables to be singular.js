'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      var renameRecipes = queryInterface.renameTable("Recipes", "Recipe");
      var renameIngredients = queryInterface.renameTable("Ingredients", "Ingredient");
      var renameRecipeIngredients =  queryInterface.renameTable("RecipeIngredients", "RecipeIngredient");

      Promise.all([renameRecipes, renameIngredients, renameRecipeIngredients]);
  },

  down: (queryInterface, Sequelize) => {
      var renameRecipe = queryInterface.renameTable("Recipe", "Recipes");
      var renameIngredient = queryInterface.renameTable("Ingredient", "Ingredients");
      var renameRecipeIngredient =  queryInterface.renameTable("RecipeIngredient", "RecipeIngredients");

      Promise.all([renameRecipe, renameIngredient, renameRecipeIngredient]);
  }
};
