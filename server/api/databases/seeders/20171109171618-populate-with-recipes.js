'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes',[
        {name: "Strawberry Pancakes"},
        {name: "Banana Pancakes"},
        {name: "Blueberry Pancakes"}
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Recipes', null, {});

  }
};
