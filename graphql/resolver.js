const knex = require('../knex/knex');

const resolvers = {
  Query: {
    persons: () => knex.select().table('person'),
    planets: () => knex.select().table('planet'),
  },
};

module.exports = resolvers;
