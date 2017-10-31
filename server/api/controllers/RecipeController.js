const RecipeService = require('../services/RecipeService');


function fetchAllRecipes(response) {
    RecipeService.fetchAllRecipes((recipes) => response.json(recipes));
}

module.exports = {
    fetchAllRecipes: fetchAllRecipes
};