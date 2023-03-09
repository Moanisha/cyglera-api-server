const { encryptPwd } = require("../util/cryptFunc");
const db = require("../models");
const { sequelize } = require("../models");

const User = db.users;
const Dietician = db.dieticians;
const Client = db.clients;
const Appointment = db.appointments;

exports.createAppointment = async (req, res) => {
  const {
    subject,
    startTime,
    endtime,
    videoLink,
    description,
    relatedFrom,
    relatedTo,
  } = req.body;
  console.log(req.body);
  try {
    const result = await sequelize.transaction(async (t) => {
      //now save to DB
      const createAppointment = await Appointment.create(
        {
          subject,
          startTime,
          endtime,
          videoLink,
          description,
          relatedFrom,
          relatedTo,
        },
        { transaction: t }
      );
      if (!createAppointment || createAppointment.length < 1) {
        return res
          .status(401)
          .send({ type: "error", msg: "Couldn't create appointment" });
      }
      if (createAppointment) {
        if (userRole == "DIETICIAN") {
          let updatedUser = await User.update(
            {
              DieticianId: relatedTo,
              updatedAt: new Date(),
            },
            {
              where: {
                ClientId: relatedFrom,
              },
            }
          );

          if (updatedUser) {
            responseBody = {
              statusCode: 200,
              statusMessage: "Client details updated successfully!",
              updatedUser: updatedUser,
            };
          } else {
            responseBody = {
              statusCode: 400,
              statusMessage: `Cannot update Client details!`,
            };
          }
        }
      }
      res.send({
        msg: "Appointment created Successfully",
        type: "success",
        responseBody,
      });
    });
  } catch (err) {
    res.status(500).send({ msg: err.message, type: "error" });
  }
};
