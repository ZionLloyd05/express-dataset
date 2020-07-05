'use strict';
module.exports = (sequelize, DataTypes) => {
  const actor = sequelize.define(
    'actor',
    {
      login: DataTypes.STRING,
      avatar_url: DataTypes.STRING,
    },
    { timestamps: false }
  );
  actor.associate = function (models) {
    // associations can be defined here
    actor.hasMany(models.event);
  };
  return actor;
};
