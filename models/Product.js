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
        as: "Brand",
      });
      Product.belongsTo(models.ProductType, {
        foreignKey: "product_type_id",
        as: "ProductType",
      });
      Product.belongsToMany(models.User, {
        through: models.SavedProduct,
        foreignKey: "product_id",
        as: "Users",
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
      skintype: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["oily", "dry", "normal", "combination"],
        defaultValue: "normal",
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
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
