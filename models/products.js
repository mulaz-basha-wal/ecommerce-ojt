"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.hasMany(models.Product_Images);
      Products.belongsTo(models.Categories);
      Products.belongsTo(models.Cart_items);
      Products.belongsTo(models.Merchants);
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
