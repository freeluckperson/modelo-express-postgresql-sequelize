const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testapi", "postgres", "postgres", {
  logging: false,
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
