"use strict";

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.addColumn("Dieticians", "availableSlots", {
      allowNull: true,
      type: Sequelize.JSON,
    });
  },
  down: async function (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Dieticians", "availableSlots");
  },
};
