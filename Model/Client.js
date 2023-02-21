//Dietician model
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
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
      DieticianId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      PhysicianId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      TrainerId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      CareProviderId: {
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
      waistCircumference: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      hipCircumference: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      BMI: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      goals: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      dailyActivityLevel: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      languages: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      occupation: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dietHabits: {
        allowNull: false,
        type: DataTypes.JSON,
      },
    },
    { timestamps: true }
  );
  Client.associate = function (models) {
    models.Client.belongsTo(models.User);
  };
  return Client;
};
