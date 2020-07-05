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

    return queryInterface.bulkInsert('repos', [
      {
        id: 333,
        name: 'test_repo',
        url: 'https://github.com/ZionLloyd05/shop.API',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 222,
        name: 'test_repo2',
        url: 'https://github.com/ZionLloyd05/shop.API',
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
