'use strict';
module.exports = (sequelize, DataTypes) => {
  var RecipeIngredients = sequelize.define('RecipeIngredients', {
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
    RecipeIngredients.removeAttribute('id')
    return RecipeIngredients;
};