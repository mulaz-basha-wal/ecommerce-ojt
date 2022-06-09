"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
          as: "category_id",
        },
      },
      merchant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "merchants",
          key: "id",
          as: "merchant_id",
        },
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
