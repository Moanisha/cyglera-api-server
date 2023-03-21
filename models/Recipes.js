module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define(
      "Recipe",
      {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
          },
          userName: {
            allowNull: true,
            type: DataTypes.STRING,
          },
          DieticianId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
              model: "Dieticians",
              key: "id",
            },
          },
          email: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          recipeName: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
          },
          summary: {
            allowNull: true,
            type: DataTypes.STRING,
          },
          imgUrl: {
            allowNull: true,
            type: DataTypes.STRING,
          },
          ingredients: {
            allowNull: false,
            type: DataTypes.TEXT,
          },
          instructions: {
            allowNull: true,
            type: DataTypes.TEXT,
          },
          benefits: {
            allowNull: true,
            type: DataTypes.TEXT,
          },
          prepTime: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          cookTime: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          totalTime: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          carbohydrates: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          calories: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          protein: {
            allowNull: false,
            type: DataTypes.STRING,
          },
          fat: {
            allowNull: false,
            type: DataTypes.STRING,
          },
        // nutrionalFacts: {
        //     allowNull: false,
        //     type: DataTypes.JSON,
        // },
        courses: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        cuisines: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updatedAt: {
            allowNull: true,
            type: DataTypes.DATE,
          },
        });
        return Recipe;
    }