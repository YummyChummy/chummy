const db =  require("../databases/PostgresInit");

function fetchRecipes() {

    return new Promise(function (resolve, reject) {
        db.any('select * from \"Recipes\";')
            .then(function (recipeData) {
                return resolve(recipeData);
            })
            .catch(function (err) {
                return reject(err);
            });
    })
}

module.exports = {
    fetchRecipes: fetchRecipes
};