const Sequelize = require("sequelize");
const sequelize = new Sequelize("bookingapp", "root", "Chaithanya@121", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
