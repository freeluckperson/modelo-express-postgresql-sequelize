const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testapi", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
