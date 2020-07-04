'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      actorId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'actors',
          key: 'id',
        },
      },
      repoId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'repos',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  },
};
