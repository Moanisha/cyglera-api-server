//importing modules
const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

const cors = require("cors");
const db = require("./models");

const models = require("./models");

const Recipe = models.Recipe;

//adminCheck and canteenCheck checks the role(admin/dietician/trainer) in req.userObj
const authCheck = require("./Middlewares/authCheck");
const dieticianCheck = require("./Middlewares/dieticianCheck");
const trainerCheck = require("./Middlewares/trainerCheck");

const authRoutes = require("./routes/authRoutes");
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
app.use("/api/auth", authRoutes);
app.use("/api/appointment", authCheck, appointmentRoutes);

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to App" });
});

//route to add recipe details
app.post("/addRecipe",async(req, res)=>{
	const formData = req.body;
	console.log(formData);
	await Recipe.create(formData);
	await res.send("true");
});
//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
