'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    'event',
    {
      type: DataTypes.STRING,
      actorId: DataTypes.INTEGER,
      repoId: DataTypes.INTEGER,
      created_at: DataTypes.STRING,
    },
    { timestamps: false }
  );
  event.associate = (models) => {
    // associations can be defined here
    event.belongsTo(models.actor, {
      foriegnKey: 'actorId',
      as: 'actor',
      onDelete: 'CASCADE',
    });
    event.belongsTo(models.repo, {
      foriegnKey: 'repoId',
      onDelete: 'CASCADE',
    });
  };
  return event;
};
