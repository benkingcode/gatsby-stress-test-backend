'use strict';

const models = require('../models');
const faker = require('faker');
require('@gouch/to-title-case');

const now = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const shows = await models.Show.findAll();

    for (let show of shows) {
      const episodes = [...Array(99)].map((ep, i) => {
        return {
          showId: show.id,
          name: faker.lorem.words(3).toTitleCase(),
          description: `<p>${faker.lorem.paragraph()}</p>`,
          season: 1,
          episode: i + 1,
          duration: 1200 + faker.random.number(1200),
          releaseDate: faker.date.recent(),
          createdAt: now,
          updatedAt: now,
        };
      });

      await queryInterface.bulkInsert('Episodes', episodes, {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Episodes', null, {});
  },
};
