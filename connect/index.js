const { Sequelize } = require("sequelize");
const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST } = require("../config");

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  logging: false,
  host: DB_HOST,
  dialect: "postgres",
});

module.exports = sequelize;
