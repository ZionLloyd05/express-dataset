'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      actorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'actors',
          key: 'id',
        },
      },
      repoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'repos',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  },
};
