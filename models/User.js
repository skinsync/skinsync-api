const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          role: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["admin", "member"],
            defaultValue: "member",
          },
          birthdate: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          gender: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ["male", "female"],
          },
          profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
            field: "profile_picture",
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: "created_at",
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: "updated_at",
          },
    }, 
    {
        tableName: "users",
        timestamps: true,
        paranoid: true,
        deletedAt: "deleted_at",
    }
);
return User;

}