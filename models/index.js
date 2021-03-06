'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { envVariables } = require('../helpers');
const basename = path.basename(__filename);

const env = envVariables.env || 'development';
// console.log(env);
const db = {};
let sequelize;

if (env === 'development') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './event.db',
    logging: false,
  });
} else if (env === 'test') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './test.db',
    logging: false,
  });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
