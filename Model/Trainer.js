//Dietician model
module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define(
    "Trainer",
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
    },
    { timestamps: true }
  );
  Trainer.associate = function (models) {
    models.Trainer.belongsTo(models.User);
  };
  return Trainer;
};
