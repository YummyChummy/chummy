const db =  require("../databases/PostgresInit");

function fetchAllRecipes(callback) {
    db.any('select * from Recipes;')
        .then(function (recipeData) {
            return callback(recipeData);
        })
        .catch(function (err) {
            return callback(err);
        });
}

module.exports = {
    fetchAllRecipes: fetchAllRecipes
};