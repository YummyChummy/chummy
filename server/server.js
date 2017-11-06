const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || config.devServer.port;
const Recipes = require('./api/models/Recipes').Recipes

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) => {
    Recipes.findAll().then(recipes => {
        res.json(recipes)
    })
});

app.post ('/api/recipes', (req, res) => {
    res.json({"succesful": "yes"})

    var name = req.query.name

    Recipes.sync().then(Recipes.create({
        name: name,
    })).then((res) => console.log(res))

    console.log(`name: ${name}\tingredients:`)
});

app.get(/\/(?!api\/)/, (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});
