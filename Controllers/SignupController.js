const { encryptPwd } = require("../util/cryptFunc");
const models = require("../models");
const { sequelize } = require("../models");

const User = models.User;
const Dietician = models.Dietician;
const Client = models.Client;
const Trainer = models.Trainer;
const Physician = models.Physician;
const CareProvider = models.CareProvider;
const availableSlots = [
  "9:00AM - 10:00AM",
  "10:00AM - 11:00AM",
  "11:00AM - 12:00PM",
  "12:00PM - 1:00PM",
  "2:00PM - 3:00PM",
  "3:00PM - 4:00PM",
  "4:00PM - 5:00PM",
  "5:00PM - 6:00PM",
];
const SignupController = async (req, res) => {
  const {
    email,
    password,
    firstName,
    userRole,
    lastName,
    address,
    city,
    country,
    postalCode,
    phone,
    province,
    gender,
    agreementSigned,
    height,
    weight,
    languages,
    yearsOfExperience,
    education,
    occupation,
    areaOfFocus,
    professionalSummary,
    professionalApproach,
    waistCircumference,
    hipCircumference,
    BMI,
    dailyActivityLevel,
    dietHabits,
    goals,
  } = req.body;
  try {
    const result = await sequelize.transaction(async (t) => {
      //now hash pwd
      const hashedPwd = await encryptPwd(password);
      //now save to DB
      const createUser = await User.create(
        {
          password: hashedPwd,
          email,
          firstName,
          userRole,
          lastName,
          address,
          city,
          country,
          postalCode,
          phone,
          province,
          gender,
          agreementSigned,
        },
        { transaction: t }
      );
      if (!createUser || createUser.length < 1) {
        return res
          .status(401)
          .send({ type: "error", msg: "Couldn't create User" });
      }
      if (createUser) {
        if (userRole == "DIETICIAN") {
          let UserId = createUser.id;
          await Dietician.create(
            {
              UserId,
              height,
              weight,
              languages,
              yearsOfExperience,
              education,
              occupation,
              areaOfFocus,
              professionalSummary,
              professionalApproach,
              availableSlots,
            },
            { transaction: t }
          );
        } else if (userRole == "CLIENT") {
          let UserId = createUser.id;
          await Client.create(
            {
              UserId,
              height,
              weight,
              languages,
              BMI,
              occupation,
              waistCircumference,
              hipCircumference,
              dailyActivityLevel,
              dietHabits,
              goals,
            },
            { transaction: t }
          );
        } else if (userRole == "TRAINER") {
          let UserId = createUser.id;
          await Trainer.create(
            {
              UserId,
              height,
              weight,
              languages,
              yearsOfExperience,
              education,
              occupation,
              areaOfFocus,
              professionalSummary,
              professionalApproach,
              availableSlots,
            },
            { transaction: t }
          );
        } else if (userRole == "PHYSICIAN") {
          let UserId = createUser.id;
          await Physician.create(
            {
              UserId,
              height,
              weight,
              languages,
              yearsOfExperience,
              education,
              occupation,
              areaOfFocus,
              professionalSummary,
              professionalApproach,
              availableSlots,
            },
            { transaction: t }
          );
        } else if (userRole == "CAREPROVIDER") {
          let UserId = createUser.id;
          await CareProvider.create(
            {
              UserId,
              height,
              weight,
              languages,
              yearsOfExperience,
              education,
              occupation,
              areaOfFocus,
              professionalSummary,
              professionalApproach,
              availableSlots,
            },
            { transaction: t }
          );
        }
      }
      res.send({ msg: "User created Successfully", type: "success" });
    });
  } catch (err) {
    res.status(500).send({ msg: err.message, type: "error" });
  }
};

module.exports = SignupController;
