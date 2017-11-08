'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Recipes', {
          rid:{
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          name: Sequelize.STRING,
      }, {timestamps: false});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Recipes');

  }
};
