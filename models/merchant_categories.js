"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchant_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Merchant_categories.init(
    {
      merchant_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Merchant_categories",
    }
  );
  return Merchant_categories;
};
