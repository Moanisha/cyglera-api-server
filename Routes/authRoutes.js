const router = require("express").Router();

const SigninController = require("../Controllers/SigninController");
const SignupController = require("../controllers/SignupController");
const ProfileController = require("../Controllers/ProfileController");
const FetchProfileController = require("../Controllers/FetchController");
<<<<<<< HEAD
const fetchAllRecipesController = require("../Controllers/fetchAllRecipesController")
const DashboardController = require('../Controllers/DashboardController');
=======
const fetchAllRecipesController = require("../Controllers/fetchAllRecipesController");
const fetchSingleRecipeController = require("../Controllers/fetchSignleRecipeController");
>>>>>>> 556c709b69b3efdcc308d7c6585e2099f090517b

router.post("/signup", SignupController);
router.post("/signin", SigninController);
router.post("/profile", ProfileController);
router.post("/fetchprofile", FetchProfileController);
router.get("/fetchAllRecipes", fetchAllRecipesController);
<<<<<<< HEAD
router.post("/getDashboard", DashboardController );
=======
router.post("/fetchSignleRecipe", fetchSingleRecipeController);
>>>>>>> 556c709b69b3efdcc308d7c6585e2099f090517b

module.exports = router;
