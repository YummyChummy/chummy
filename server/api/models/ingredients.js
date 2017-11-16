'use strict';
module.exports = (sequelize, DataTypes) => {
    var Ingredients = sequelize.define('Ingredients', {
      iid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: DataTypes.STRING
    });

    Ingredients.associate = function (models) {
        Ingredients.belongsToMany(models.Recipes, { through: { model: models.RecipeIngredients }, foreignKey: "iid" });
    };

    Ingredients.removeAttribute('id');
    return Ingredients;
};