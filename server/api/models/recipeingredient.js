'use strict';
module.exports = (sequelize, DataTypes) => {
    var RecipeIngredient = sequelize.define('RecipeIngredient', {
      quantity: DataTypes.INTEGER
    });

    RecipeIngredient.removeAttribute('id');
    return RecipeIngredient;
};