const Sequelize= require('sequelize')

const sequelize = new Sequelize(
    'db9jjg71dcvcvf',
    'gvvxmhbwyglftp',
    '657db41b648b2e42852d950280d1d553cf3156041a3b82a1a0a9859e0486d9f7',
    {
        dialect:  'postgres',
        protocol: 'postgres',
        port: 5432,
        host: 'ec2-54-243-42-218.compute-1.amazonaws.com',

        dialectOptions: {
            ssl: true
        },

        pool: {
            max: 20,
            min: 0,
            idle: 5000
        }
    });

    sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;