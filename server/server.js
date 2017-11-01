const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || 3000;
const RecipeController = require('./api/controllers/RecipeController');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) => {

    RecipeController.fetchRecipes()
        .then(function (response) {
            res.json(response);
        })
        .catch(function (error) {
            console.log("Error: " + error)
            res.json({status: "404", message: "Could not process query"});
        })
});

app.get(/\/(?!api\/)/, (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});
