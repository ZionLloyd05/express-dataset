require('dotenv').config({
  path: '../variable.env',
});

exports.envVariables = {
  dialect: process.env.DIALECT,
};
