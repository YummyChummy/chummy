const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || config.devServer.port;
const Recipe = require("./api/models/index")['Recipe'];
const Ingredient = require("./api/models/index")['Ingredient'];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) => {
    Recipe
        .findAll()
        .then((response) => res.json(response))
});

app.post ('/api/recipes', (req, res) => {

    var ingredient = Ingredient.create(
        { name: "Pork Ribs" }
    );

    var recipe = Recipe.create(
        { name: "BBQ Ribs" }
    );

    var createModelInstances = [ingredient, recipe];

    Promise.all(createModelInstances).then(

        function(responses) {
            var ingredient = responses[0];
            var recipe = responses[1];

            recipe.addIngredient(ingredient,{ through: { quantity: 2 }});
        }
    );

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
