require("dotenv").config();

module.exports = {
  PORT: parseInt(process.env.PORT) || 8000
};