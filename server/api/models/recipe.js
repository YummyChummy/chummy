'use strict';

module.exports = (sequelize, DataTypes) => {

  var Recipe = sequelize.define('Recipe', {
      rid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
  });

  Recipe.associate = function(models) {
      // associations can be defined here
      Recipe.hasMany(models.Ingredient)
  };

  Recipe.removeAttribute('id');
  return Recipe;
};