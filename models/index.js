//importing modules
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(module.filename);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

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
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//exporting the module
module.exports = db;
