const RecipeService = require('../services/RecipeService');


function fetchRecipes(name) {
    return new Promise(function (resolve, reject) {
        resolve(RecipeService.fetchRecipes(name))
    })
}

module.exports = {
    fetchRecipes: fetchRecipes
};