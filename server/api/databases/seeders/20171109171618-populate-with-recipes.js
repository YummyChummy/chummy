'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipe',[
        {name: "Strawberry Pancakes"},
        {name: "Banana Pancakes"},
        {name: "Blueberry Pancakes"}
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Recipe', null, {});

  }
};
