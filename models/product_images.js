"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product_Images.belongsTo(models.Products);
    }
  }
  Product_Images.init(
    {
      product_id: DataTypes.INTEGER,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product_Images",
    }
  );
  return Product_Images;
};
