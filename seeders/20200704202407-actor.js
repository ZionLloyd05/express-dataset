'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('actors', [
      {
        id: 121,
        login: 'dami123',
        avatar_url: 'https://avatars.com/2790311',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3232,
        login: 'eazy123',
        avatar_url: 'https://avatars.com/2790311',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
