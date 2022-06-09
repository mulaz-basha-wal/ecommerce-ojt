"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Merchant_categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      merchant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "merchants",
          key: "id",
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
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
    await queryInterface.dropTable("Merchant_categories");
  },
};
