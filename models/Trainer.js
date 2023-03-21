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
      title:{
        allowNull: true,
        type: DataTypes.STRING,
      },
      middleName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      martialStatus:{
        type: DataTypes.STRING,
        allowNull: true
      },
      familyPhysician:{
        type: DataTypes.STRING,
        allowNull: true
      },
      billingAddressLine1: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      billingAddressLine2: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      billingCity: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      billingCountry: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      billingProvince: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      billingPostalCode: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      billingPhone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      shippingAddressLine1: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      shippingAddressLine2: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      shippingCity: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      shippingCountry: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      shippingProvince: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      shippingPostalCode: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      shippingPhone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      availableSlots: {
        allowNull: true,
        type: DataTypes.JSON,
      },
    },
    { timestamps: true }
  );
  Trainer.associate = function (models) {
    Trainer.belongsTo(models.User, {
      foreignKey: "UserId",
    });
    Trainer.hasMany(models.Client);
  };

  return Trainer;
};
