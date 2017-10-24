const express = require('express');
const path = require('path');
const app = express();
const prodConfig = require('./webpack.prod.config');
const port = process.env.PORT || prodConfig.devServer.port;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, function () {
    console.log(`Running CHUMMY in ${process.env.NODE_ENV} environment, listening on port:${port}`);
});


