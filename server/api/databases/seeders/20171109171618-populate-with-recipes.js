'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes',[
        {name: "Strawberry Pancakes", ingredients:"{}"},
        {name: "Banana Pancakes", ingredients:"{}"},
        {name: "Blueberry Pancakes", ingredients:"{}"}
    ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Recipes', null, {});

  }
};
