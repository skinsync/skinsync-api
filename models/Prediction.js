"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prediction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prediction.init(
    {
      result: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      probability: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      raw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Prediction",
    }
  );
  return Prediction;
};
