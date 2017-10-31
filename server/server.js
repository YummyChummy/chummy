const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || config.devServer.port;
const recipeController = require('./api/controllers/RecipeController');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) => {
    recipeController.fetchAllRecipes(res)
});

app.get(/\/(?!api\/)/, (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});
