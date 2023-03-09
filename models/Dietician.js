//Dietician model
module.exports = (sequelize, DataTypes) => {
  const Dietician = sequelize.define(
    "Dietician",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      UserId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      height: {
        allowNull: true,
        type: DataTypes.DOUBLE,
      },
      weight: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      languages: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      yearsOfExperience: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      education: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      occupation: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      areaOfFocus: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      professionalSummary: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      professionalApproach: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      availableSlots: {
        allowNull: true,
        type: DataTypes.JSON,
      },
    },
    { timestamps: true }
  );
  Dietician.associate = function (models) {
    Dietician.belongsTo(models.User, {
      foreignKey: "UserId",
    });
    Dietician.hasMany(models.Client);
  };
  return Dietician;
};
