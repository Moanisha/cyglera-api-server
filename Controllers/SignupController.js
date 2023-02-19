const { encryptPwd } = require("../util/cryptFunc");
const db = require("../Model");

const User = db.users;
const Dietician = db.dieticians;

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
  } = req.body;
  console.log(languages, yearsOfExperience);
  try {
    //now hash pwd
    const hashedPwd = await encryptPwd(password);
    //now save to DB
    const createUser = await User.create({
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
    });
    if (!createUser || createUser.length < 1) {
      return res
        .status(401)
        .send({ type: "error", msg: "Couldn't create User" });
    }
    if (createUser) {
      if (userRole == "DIETICIAN") {
        let UserId = createUser.id;
        await Dietician.create({
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
        });
      }
    }

    res.send({ msg: "User created Successfully", type: "success" });
  } catch (err) {
    res.status(500).send({ msg: err.message, type: "error" });
  }
};

module.exports = SignupController;
