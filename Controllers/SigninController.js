const { decryptPwd } = require("../util/cryptFunc");
const { signToken } = require("../util/jwtFunc");
const db = require("../Model");

const User = db.users;
const SigninController = async (req, res) => {
  const { password, email } = req.body;

  try {
    //check whetehr user with email exists
    const userFound = await User.findOne({ email });
    console.log(userFound);
    if (!userFound) {
      return res
        .status(400)
        .send({ type: "error", msg: "No User Found....check credentials" });
    }
    //check pwd matches or not
    const passwordMatch = await decryptPwd(password, userFound.password);
    if (!passwordMatch) {
      return res
        .status(400)
        .send({ type: "error", msg: "No User Found....check credentials" });
    }
    //userFound,now send jwt
    const payload = {
      email: userFound.dataValues.email,
      firstName: userFound.dataValues.firstName,
      userRole: userFound.dataValues.userRole,
      lastName: userFound.dataValues.lastName,
      address: userFound.dataValues.address,
      city: userFound.dataValues.city,
      country: userFound.dataValues.country,
      postalCode: userFound.dataValues.postalCode,
      phone: userFound.dataValues.phone,
      province: userFound.dataValues.province,
      gender: userFound.dataValues.gender,
      agreementSigned: userFound.dataValues.agreementSigned,
    };
    const tokenGenerated = signToken(payload);
    //send token + data to client
    res.send({
      msg: `Welcome ${userFound.dataValues.firstName}`,
      type: "success",
      tokenGenerated,
      userData: payload,
    });
  } catch (err) {
    res.status(500).send({ msg: err.message, type: "error" });
  }
};

module.exports = SigninController;
