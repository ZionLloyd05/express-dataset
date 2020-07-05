'use strict';
module.exports = (sequelize, DataTypes) => {
  const repo = sequelize.define(
    'repo',
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    { timestamps: false }
  );
  repo.associate = function (models) {
    // associations can be defined here
  };
  return repo;
};
