"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchants.hasMany(models.Products);
      Merchants.belongsToMany(models.Categories, {
        through: models.Merchant_categories,
        foreignKey: {
          name: "category_id",
        },
      });
    }
  }
  Merchants.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Merchants",
    }
  );
  return Merchants;
};
