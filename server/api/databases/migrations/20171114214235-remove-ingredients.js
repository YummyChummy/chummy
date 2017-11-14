'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Recipes', 'ingredients');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Recipes', 'ingredients', {type: Sequelize.JSON} );
  }
};
