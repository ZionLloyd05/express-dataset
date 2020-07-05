require('dotenv').config();

exports.envVariables = {
  dialect: process.env.DIALECT,
  env: process.env.NODE_ENV,
};
