'use strict';
module.exports = (sequelize, DataTypes) => {
    var Ingredient = sequelize.define('Ingredient', {
      iid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: DataTypes.STRING
    });

    Ingredient.associate = function (models) {
        Ingredient.belongsToMany(models.Recipe, { through: { model: models.RecipeIngredient }, foreignKey: "iid" });
    };

    Ingredient.removeAttribute('id');
    return Ingredient;
};