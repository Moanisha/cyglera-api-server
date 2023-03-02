"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CareProviders", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      height: {
        allowNull: true,
        type: Sequelize.DOUBLE,
      },
      weight: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      languages: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      yearsOfExperience: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      education: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      occupation: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      areaOfFocus: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      professionalSummary: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      professionalApproach: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      availableSlots: {
        allowNull: true,
        type: Sequelize.JSON,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CareProviders");
  },
};
