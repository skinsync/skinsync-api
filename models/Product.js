"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand, {
        foreignKey: "brand_id",
        as: "brand",
      });
      Product.belongsTo(models.ProductType, {
        foreignKey: "product_type_id",
        as: "product_type",
      });
      Product.belongsToMany(models.User, {
        through: models.SavedProduct,
        foreignKey: "product_id",
        as: "users",
      });
    }
  }
  Product.init(
    {
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "brand_id",
      },
      product_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_type_id",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      notable_effects: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "notable_effects",
      },
      skintype: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Normal",
      },
      price: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      picture: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};
