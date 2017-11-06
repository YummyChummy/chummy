const sequelize = require('../databases/SequelizeInit')
const Sequelize = require('sequelize')

const Recipes = sequelize.define('Recipes', {
    rid:{
        type: Sequelize.INTEGER,
        primaryKey: 'true',
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
},{timestamps:false});

// force: true will drop the table if it already exists
Recipes.sync({force: true}).then(() => {
    // Table created
    return Recipes.bulkCreate([
            { name: 'Potato Salad' },
            { name: 'Pumpkin Pie' },
            { name: 'Strawberry Jam Pie'}
        ],
    );
});

module.exports = {
    Recipes: Recipes
}