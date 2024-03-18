"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.Service, {
        foreignKey: "ServiceId",
        onDelete: "CASCADE",
      });
    }
  }
  Message.init(
    {
      sender_id: DataTypes.INTEGER,
      receiver_id: DataTypes.INTEGER,
      text: DataTypes.STRING,
      ServiceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
