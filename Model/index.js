//importing modules
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:password@localhost:5432/cyglera-api-server`,
  { dialect: "postgres" }
);

//checking if connection is done
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("./User")(sequelize, DataTypes);
db.dieticians = require("./Dietician")(sequelize, DataTypes);
db.clients = require("./Client")(sequelize, DataTypes);

//exporting the module
module.exports = db;
