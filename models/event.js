'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    'event',
    {
      type: DataTypes.STRING,
      actorId: DataTypes.INTEGER,
      repoId: DataTypes.INTEGER,
    },
    {}
  );
  event.associate = (models) => {
    // associations can be defined here
    event.belongsTo(models.actor, {
      foriegnKey: 'actorId',
      as: 'actor',
    });
    event.belongsTo(models.repo);
  };
  return event;
};
