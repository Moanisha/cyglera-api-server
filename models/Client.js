//CLient model
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
    },
    { timestamps: true }
  );
  return Client;
};
