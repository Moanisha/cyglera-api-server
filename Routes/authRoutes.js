const router = require("express").Router();

const SigninController = require("../Controllers/SigninController");
const SignupController = require("../controllers/SignupController");
const fetchAllRecipesController = require("../Controllers/fetchAllRecipesController")

router.post("/signup", SignupController);
router.post("/signin", SigninController);
router.get("/fetchAllRecipes", fetchAllRecipesController);

module.exports = router;
