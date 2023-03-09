//CLient model
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      subject: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      timeSlot: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      videoLink: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      relatedFrom: {
        allowNull: false,
        type: DataTypes.STRING,
        isEmail: true,
      },
      relatedTo: {
        allowNull: false,
        type: DataTypes.STRING,
        isEmail: true,
      },
    },
    { timestamps: true }
  );
  return Appointment;
};
