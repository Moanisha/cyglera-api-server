//importing modules
const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

// const multer = require('multer');
// const fs = require('fs');
// const upload = multer({ dest: 'uploads/' }); // specify the directory to store the uploaded files

const cors = require("cors");
const db = require("./models");

const models = require("./models");
const cron = require("./cron"); // assuming that the file is in the same directory as app.js

const Recipe = models.Recipe;

//adminCheck and canteenCheck checks the role(admin/dietician/trainer) in req.userObj
const authCheck = require("./Middlewares/authCheck");
const dieticianCheck = require("./Middlewares/dieticianCheck");
const trainerCheck = require("./Middlewares/trainerCheck");

const authRoutes = require("./Routes/authRoutes");
const appointmentRoutes = require("./Routes/appointmentRoutes");

//setting up your port
const PORT = process.env.PORT || 8080;

//assigning the variable app to express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "*" }));

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false, alter: true }).then(() => {
  console.log("db has been re sync");
});
app.use("/api/auth/", authRoutes);
app.use("/api/appointment", authCheck, appointmentRoutes);

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to App" });
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/images');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post('/addRecipe', upload.single('imgUrl'), async (req, res) => {
//   const fileData = req.file;
//   const {
//     userName,
//     email,
//     recipeName,
//     summary,
//     ingredients,
//     instructions,
//     benefits,
//     prepTime,
//     cookTime,
//     totalTime,
//     carbohydrates,
//     calories,
//     protein,
//     fat,
//     courses,
//     cuisines,
//   } = req.body;

//   // const imgBuffer = fs.readFileSync(req.file.path);
//   try {
//     const recipe = await Recipe.create({
//       userName,
//       email,
//       recipeName,
//       summary,
//       imgUrl: fileData,
//       ingredients,
//       instructions,
//       benefits,
//       prepTime,
//       cookTime,
//       totalTime,
//       carbohydrates,
//       calories,
//       protein,
//       fat,
//       courses,
//       cuisines,
//     });

//     res.status(201).json({ success: true, recipe });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }

// })

// //
//route to add recipe details
app.post("/addRecipe", async (req, res) => {
  const formData = req.body;
  console.log(formData);
  await Recipe.create(formData);
  await res.send("true");
});

// Call the function to initialize the cron job
cron.start();
//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
