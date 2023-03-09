"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Appointments",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        subject: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        timeSlot: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        videoLink: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        relatedFrom: {
          allowNull: false,
          type: Sequelize.STRING,
          isEmail: true,
        },
        relatedTo: {
          allowNull: false,
          type: Sequelize.STRING,
          isEmail: true,
        },
      },
      { timestamps: true }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Appointments");
  },
};
