'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ingredients = sequelize.define('Ingredients', {
    iid: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Ingredients.belongsToMany(models.Recipes, {through: models.RecipeIngredients, foreignKey: "iid"})

      }
    }
  }, {timestamps: false});
    Ingredients.removeAttribute('id')
    return Ingredients;
};