const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || config.devServer.port;
const Recipes = require("./api/models/index")['Recipes'];
const Ingredients = require("./api/models/index")['Ingredients'];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) => {
    Recipes
        .findAll()
        .then((response) => res.json(response))
});

app.post ('/api/recipes', (req, res) => {

    Recipes.create(
    {
        name: "BBQ Ribs",
        ingredients: [
            { name: "Pork Ribs" }
        ]
    },
    {
        include: [ Ingredients ]
    });

    //recipe := Recipe.create()
    //for ingredient in ingredientsList
    //   ingredient <- Ingredient.create()
    //   recipesIngredient <- RecipesIngredient.create({quantity: 2})
    //   recipe.addIngredient(recipesIngredient)
    //   ingredient.addRecipe(recipesIngredient)

    //recipe := Recipe.create()
    //for ingredient in ingredientsList
    //   ingredient <- Ingredient.create()
    //   recipes.addIngredient(ingredient, { through: { quantity: 2 }})
    //   ingredient.addRecipes(recipe, { through: { quantity: 2 }})

    res.json({"succesful": "yes"})

});

app.get(/\/(?!api\/)/, (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});
