const router = require("express").Router();

const SigninController = require("../Controllers/SigninController");
const SignupController = require("../controllers/SignupController");
const ProfileController = require("../Controllers/ProfileController");
const FetchProfileController = require("../Controllers/FetchController");
const fetchAllRecipesController = require("../Controllers/fetchAllRecipesController")
const DashboardController = require('../Controllers/DashboardController');
const fetchSingleRecipeController = require("../Controllers/fetchSignleRecipeController");

router.post("/signup", SignupController);
router.post("/signin", SigninController);
router.post("/profile", ProfileController);
router.post("/fetchprofile", FetchProfileController);
router.get("/fetchAllRecipes", fetchAllRecipesController);
router.post("/getDashboard", DashboardController );
router.post("/fetchSignleRecipe", fetchSingleRecipeController);

module.exports = router;
