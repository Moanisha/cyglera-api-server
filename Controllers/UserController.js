const models = require("../models");

const User = models.User;
const Dietician = models.Dietician;
const Physician = models.Physician;
const Trainer = models.Trainer;
const CareProvider = models.CareProvider;

exports.fetchUsers = async (req, res) => {
  const role = req.query.role;
  try {
    var roleUsers;
    if (role == "DIETICIAN") {
      roleUsers = await Dietician.findAll({
        include: [User],
      });
    } else if (role == "PHYSICIAN") {
      roleUsers = await Physician.findAll({
        include: [User],
      });
    } else if (role == "TRAINER") {
      roleUsers = await Trainer.findAll({
        include: [User],
      });
    } else if (role == "CAREPROVIDER") {
      roleUsers = await CareProvider.findAll({
        include: [User],
      });
    }

    if (!roleUsers || roleUsers.length < 1) {
      return res.send({ type: "success", msg: "No roleUsers found", data: [] });
    }
    if (roleUsers) {
      res.send({
        msg: "RoleUsers fetched successfully!",
        type: "success",
        data: roleUsers,
      });
    }
  } catch (err) {
    res.status(500).send({ msg: err.message, type: "error" });
  }
};
