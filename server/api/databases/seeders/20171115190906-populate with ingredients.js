'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Ingredient',[
            {name: "Strawberry"},
            {name: "Banana"},
            {name: "Blueberry"}
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Ingredient', null, {});

    }
};