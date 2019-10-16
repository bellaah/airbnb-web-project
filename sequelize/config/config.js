const path = require("path");
const dir = path.resolve(__dirname, ".env");
require("dotenv").config({ path: dir });

module.exports = {
  "development": {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    operatorAliases: false
  }
}