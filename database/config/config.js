const { envVariables } = require('../../helpers');

const { dialect } = envVariables;

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'event.db',
  },
  test: {
    dialect: 'sqlite',
    storage: 'test.db',
  },
  production: {
    dialect: 'sqlite',
    storage: 'production.db',
  },
};
