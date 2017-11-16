'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipes = sequelize.define('Recipes', {
      rid: DataTypes.INTEGER,
      name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Recipes.hasMany(models.Ingredients)
      }
    }
  },{timestamps: false});
  Recipes.removeAttribute('id');
  return Recipes;
};