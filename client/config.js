const DB_USERNAME = process.env.DB_USERNAME || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
const DB_DATABASE = process.env.DB_DATABASE || "testapi";
const DB_HOST = process.env.DB_HOST || "localhost";

module.exports = { DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST };
