const router = require("express").Router();

const SigninController = require("../Controllers/SigninController");
const SignupController = require("../controllers/SignupController");

router.post("/signup", SignupController);
router.post("/signin", SigninController);

module.exports = router;
