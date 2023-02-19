//user model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, //checks for email format
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userRole: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "CLIENT",
      },
      address: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      country: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      province: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      postalCode: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      gender: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      agreementSigned: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    { timestamps: true }
  );
  return User;
};
