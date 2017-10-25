const db =  require("./HerokuPGInit")

function fetchAllRecipes(callback) {
    db.any('select * from Recipes;')
        .then(function (data) {
            return callback(data);
        })
        .catch(function (err) {
            return callback(err);
        });
}

module.exports = {
    fetchAllRecipes: fetchAllRecipes
}