"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      // define association here
      Service.belongsTo(models.User, {
        foreignKey: "assigned_to",
        as: "assignedTo",
      });
      Service.belongsTo(models.User, {
        foreignKey: "service_creator",
        as: "creator",
      });
      Service.belongsTo(models.Category);
    }
  }
  Service.init(
    {
      service_name: DataTypes.STRING,
      service_description: DataTypes.STRING,
      date: DataTypes.DATE,
      time_required: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Service",
    }
  );
  return Service;
};
