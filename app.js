//importing modules
const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

const cors = require("cors");
const db = require("./Model");

//adminCheck and canteenCheck checks the role(admin/dietician/trainer) in req.userObj
const authCheck = require("./Middlewares/authCheck");
const dieticianCheck = require("./Middlewares/dieticianCheck");
const trainerCheck = require("./Middlewares/trainerCheck");

const authRoutes = require("./routes/authRoutes");
const dieticianRoutes = require("./routes/dieticianRoutes");

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
app.use("/api/dietician", authCheck, dieticianCheck, dieticianRoutes);

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to App" });
});

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
