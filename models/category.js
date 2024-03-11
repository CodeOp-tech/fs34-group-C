"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Service);
      Category.belongsToMany(models.User, { through: "Preferences" });
    }
  }
  Category.init(
    {
      category_name: DataTypes.STRING,
      category_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
