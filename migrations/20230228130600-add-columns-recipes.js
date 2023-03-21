"use strict";

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.addColumn("Recipes", "summary", {
      allowNull: true,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Recipes", "ingredients", {
      allowNull: false,
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("Recipes", "imgUrl", {
      allowNull: true,
      type: Sequelize.BYTEA,
    });
    await queryInterface.addColumn("Recipes", "prepTime", {
      allowNull: false,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Recipes", "cookTime", {
      allowNull: false,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Recipes", "nutrionalFacts", {
      allowNull: false,
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("Recipes", "courses", {
      allowNull: true,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Recipes", "cuisines", {
      allowNull: true,
      type: Sequelize.STRING,
    });
  },
  down: async function (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Recipes", "summary");
    await queryInterface.removeColumn("Recipes", "ingredients");
    await queryInterface.removeColumn("Recipes", "imgUrl");
    await queryInterface.removeColumn("Recipes", "prepTime");
    await queryInterface.removeColumn("Recipes", "cookTime");
    await queryInterface.removeColumn("Recipes", "nutritionalFacts");
    await queryInterface.removeColumn("Recipes", "courses");
    await queryInterface.removeColumn("Recipes", "cuisines");
  },
};
