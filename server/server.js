const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || config.devServer.port;
const recipes = require("./api/models").Recipes;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) => {
    recipes
        .findAll({ attributes:['rid', 'name', 'ingredients'] })
        .then((response) => res.json(response))
});

app.post ('/api/recipes', (req, res) => {
    res.json({"succesful": "yes"})

});

app.get(/\/(?!api\/)/, (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});
