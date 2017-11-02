const sequelize = require('./SequelizeInit')
const Sequelize = require('sequelize')

const Recipes = sequelize.define('Recipes', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: 'true'
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
    return Recipes.create(
        {
            id: 1,
            name: 'Potato Salad',
            ingredients: {"qty":"2","ingredient":"potato"}
        },
         );
});

module.exports = {
    Recipes: Recipes
}