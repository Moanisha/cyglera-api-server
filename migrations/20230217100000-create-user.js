"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        firstName: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        lastName: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          isEmail: true, //checks for email format
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userRole: {
          type: Sequelize.STRING,
          allowNull: false,
          default: "CLIENT",
        },
        address: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        city: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        country: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        province: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        postalCode: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        phone: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        gender: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        agreementSigned: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
      },
      { timestamps: true }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
