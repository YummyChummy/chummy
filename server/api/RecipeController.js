const DatabaseController = require('../db/HerokuPGController')


function fetchAllRecipes(callback) {
    return DatabaseController.fetchAllRecipes(callback);
}


module.exports = {
    fetchAllRecipes: fetchAllRecipes
}