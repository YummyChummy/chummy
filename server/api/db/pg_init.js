var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};


var pgp = require('pg-promise')(options);
var cn = {
    host: 'ec2-54-243-42-218.compute-1.amazonaws.com',
    port: 5432,
    database: 'db9jjg71dcvcvf',
    user: 'gvvxmhbwyglftp',
    password: '657db41b648b2e42852d950280d1d553cf3156041a3b82a1a0a9859e0486d9f7',
    ssl: "true"
};

var db = pgp(cn);

module.exports = db;