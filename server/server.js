const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || config.devServer.port;
// const RecipeController = require('./api/controllers/RecipeController');
const Recipes = require('./api/Sequelize/Models').Recipes

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) => {

    Recipes.findAll().then(recipes => {
        res.json(recipes)
    })

    // RecipeController.fetchRecipes()
    //     .then(function (response) {
    //         res.json(response);
    //     })
    //     .catch(function (error) {
    //         console.log("Error: " + error)
    //         res.json({status: "404", message: "Could not process query"});
    //     })
});

app.post ('/api/recipes', (req, res) => {
    res.json({"succesful": "yes"})
    console.log('Receiving request to add a new recipe, name: ',req.query.name, 'ingredients: ', req.query.ingredients[0])
});

app.get(/\/(?!api\/)/, (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});
