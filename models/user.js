"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Service, {
        foreignKey: "assigned_to",
        as: "assignedServices",
      });
      User.hasMany(models.Service, {
        foreignKey: "service_creator",
        as: "createdServices",
      });
      User.belongsToMany(models.Category, { through: "Preferences" });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      total_points: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
