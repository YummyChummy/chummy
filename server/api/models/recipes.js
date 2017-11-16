'use strict';

const Ingredients = require("./ingredients");

module.exports = (sequelize, DataTypes) => {

  var Recipes = sequelize.define('Recipes', {
      rid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
  });

  Recipes.associate = function(models) {
      // associations can be defined here
      Recipes.hasMany(models.Ingredients)
  };

  Recipes.removeAttribute('id');
  return Recipes;
};