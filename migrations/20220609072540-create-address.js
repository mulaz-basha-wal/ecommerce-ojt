"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Addresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
          as: "user_id",
        },
      },
      house_no: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.INTEGER,
      },
      state: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Addresses");
  },
};
