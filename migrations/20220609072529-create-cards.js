"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
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
      number: {
        type: Sequelize.BIGINT,
      },
      name: {
        type: Sequelize.STRING,
      },
      expiry_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Cards");
  },
};
