'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Ingredients',[
            {name: "Strawberry"},
            {name: "Banana"},
            {name: "Blueberry"}
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Ingredients', null, {});

    }
};