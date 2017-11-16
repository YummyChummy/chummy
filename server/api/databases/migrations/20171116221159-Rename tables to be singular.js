'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      var renameRecipes = queryInterface.renameTable("Recipes", "Recipe");
      var renameIngredients = queryInterface.renameTable("Ingredients", "Ingredient");
      var renameRecipeIngredients =  queryInterface.renameTable("RecipeIngredients", "RecipeIngredient");

      return renameRecipes.then(function () {
          return renameIngredients.then(function () {
              return renameRecipeIngredients
          })
      });
  },

  down: (queryInterface, Sequelize) => {
      var renameRecipe = queryInterface.renameTable("Recipe", "Recipes");
      var renameIngredient = queryInterface.renameTable("Ingredient", "Ingredients");
      var renameRecipeIngredient =  queryInterface.renameTable("RecipeIngredient", "RecipeIngredients");

      return renameRecipe.then(function () {
          return renameIngredient.then(function () {
              return renameRecipeIngredient
          })
      });
  }
};
