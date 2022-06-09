"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cards.belongsTo(model.Users);
    }
  }
  Cards.init(
    {
      user_id: DataTypes.INTEGER,
      number: DataTypes.BIGINT,
      name: DataTypes.STRING,
      expiry_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Cards",
    }
  );
  return Cards;
};
