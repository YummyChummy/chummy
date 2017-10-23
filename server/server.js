const db =  require("./api/db/pg_init")
const express = require('express');
const path = require('path');
const app = express();
const config = require('../webpack.config');
const port = process.env.PORT || config.devServer.port;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/recipes', (req, res) =>{
    db.any('select * from Recipes;')
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
})

app.get(/\/(?!api\/)/, (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});
