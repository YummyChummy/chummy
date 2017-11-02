const sequelize = require('./SequelizeInit')
const Sequelize = require('sequelize')

const Recipes = sequelize.define('Recipes', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: 'true',
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    ingredients: {
        type: Sequelize.JSON
    }
});

// force: true will drop the table if it already exists
Recipes.sync({force: true}).then(() => {
    // Table created
    return Recipes.bulkCreate([
            {
                name: 'Potato Salad',
                ingredients: {"qty":"2","ingredient":"potato"}
            },
            {
                name: 'Pumpkin Pie',
                ingredients: {"qty":"1","ingredient":"pumpkin"}
            },
            {
                name: 'Strawberry Jam Pie',
                ingredients: {"qty":"1","ingredient":"strawberry"}
            }
        ],
    );
});

module.exports = {
    Recipes: Recipes
}