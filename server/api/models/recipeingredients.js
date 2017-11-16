'use strict';
module.exports = (sequelize, DataTypes) => {
    var RecipeIngredients = sequelize.define('RecipeIngredients', {
      quantity: DataTypes.INTEGER
    });

    RecipeIngredients.removeAttribute('id');
    return RecipeIngredients;
};