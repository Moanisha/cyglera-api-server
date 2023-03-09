const { encryptPwd } = require("../util/cryptFunc");
const crypto = require("crypto");
const { sequelize } = require("../models");
const axios = require("axios");
const models = require("../models");

const User = models.User;
const Dietician = models.Dietician;
const Physician = models.Physician;
const Trainer = models.Trainer;
const CareProvider = models.CareProvider;
const Client = models.Client;
const Appointment = models.Appointment;

exports.createAppointment = async (req, res) => {
  const {
    values,
    videoLink,
    description,
    relatedFrom,
    relatedTo,
    newSlots,
    roleId,
  } = req.body;
  console.log(values, videoLink, description, relatedFrom, relatedTo, newSlots);
  const userFound = await User.findOne({ where: { id: relatedFrom } });
  try {
    const result = await sequelize.transaction(async (t) => {
      //now save to DB
      const createAppointment = await Appointment.create(
        {
          subject: values.subject,
          timeSlot: values.slot,
          role: values.role,
          videoLink:
            "zoommtg://zoom.us/join?confno=8529015944&pwd=888999&uname=mick",
          description: "",
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
        if (values.userRole == "DIETICIAN") {
          let updatedDietician = await Dietician.update(
            {
              availableSlots: newSlots,
            },
            {
              where: {
                UserId: relatedTo,
              },
            }
          );
          let updatedUser = await Client.update(
            {
              DieticianId: roleId,
              updatedAt: new Date(),
            },
            {
              where: {
                UserId: relatedFrom,
              },
            }
          );
          if (updatedUser && updatedDietician) {
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
exports.fetchAppointments = async (req, res) => {
  try {
    var result;

    result = await Appointment.findAll({
      include: [User],
    });

    //const emails = dieticians.map((dietician) => dietician.User.email);

    if (!result || result.length < 1) {
      return res.send({ type: "success", msg: "No result found", data: [] });
    }
    if (result) {
      res.send({
        msg: "result fetched successfully!",
        type: "success",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).send({ msg: err.message, type: "error" });
  }
};
// const generateZoomLink = async (tomorrowFormatted, isoTime, subject) => {
//   console.log(isoTime);
//   // Replace this with your own Zoom API key and secret
//   const zoomApiKey = "rhTMWr3yTZWDyHH79bD00A";
//   const zoomApiSecret = "wL0k3bNK0I9MaTSJPO2MSbGUbCfDJ56CvaEU";
//   // Set up the Zoom API request
//   const apiUrl = "https://api.zoom.us/v2/users/me/meetings";
//   const requestHeaders = {
//     "content-type": "application/json",
//     authorization: "",
//   };
//   const requestBody = {
//     topic: subject,
//     type: 2, // Scheduled meeting
//     start_time: isoTime, // Format as ISO string
//     duration: 60, // Meeting duration in minutes
//     timezone: "UTC", // Timezone for the meeting start time
//   };
//   // Generate a signature for the Zoom API request
//   // const timestamp = Date.now() - 30000; // Subtract 30 seconds to account for clock skew
//   const message = `${zoomApiKey}${zoomApiSecret}${JSON.stringify(requestBody)}`;
//   const hmac = crypto.createHmac("sha256", zoomApiSecret);
//   hmac.update(message);
//   const signature = hmac.digest("base64");
//   requestHeaders.authorization = `Bearer ${zoomApiKey}.${signature}`;

//   // Make the Zoom API request and retrieve the meeting URL
//   try {
//     const response = await axios.post(apiUrl, requestBody, {
//       headers: requestHeaders,
//     });
//     const joinUrl = response.data.join_url;
//     return joinUrl;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Unable to generate Zoom meeting link");
//   }
// };
