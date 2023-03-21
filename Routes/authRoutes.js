const router = require("express").Router();

const SigninController = require("../Controllers/SigninController");
const SignupController = require("../controllers/SignupController");
const ProfileController = require("../Controllers/ProfileController");
const FetchProfileController = require("../Controllers/FetchController");

router.post("/signup", SignupController);
router.post("/signin", SigninController);
router.post("/profile", ProfileController);
router.post("/fetchprofile", FetchProfileController);
module.exports = router;
