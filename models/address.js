"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(model.Users);
    }
  }
  Address.init(
    {
      user_id: DataTypes.INTEGER,
      house_no: DataTypes.STRING,
      area: DataTypes.STRING,
      city: DataTypes.STRING,
      pincode: DataTypes.INTEGER,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
