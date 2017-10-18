const db =  require("./pg_init")

function getRecipes() {
    db.any('select * from Recipes;')
        .then(function (data) {
            console.log(data)
        })
        .catch(function (err) {
            console.log(err);
        });
}

module.exports = {
    getRecipes: getRecipes
}