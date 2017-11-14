'use strict';
module.exports = (sequelize, DataTypes) => {
  var ingredients = sequelize.define('Ingredients', {
    iid: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ingredients;
};