const knex = require('../knex/knex');
//knex.on('query', console.log);

const resolvers = {
  Query: {
    persons: () => knex.select().table('person'),
    specieses: () => knex.select().table('species'),    
    planets: () => knex.select().table('planet'),    
    starships: () => knex.select().table('starship'),
    vehicles: () => knex.select().table('vehicle'),

    person: (root, args, context) => knex.select().table('person').where('id', args.id).first(),   
    species: (root, args, context) => knex.select().table('species').where('id', args.id).first(),   
    planet: (root, args, context) => knex.select().table('planet').where('id', args.id).first(),    
    starship: (root, args, context) => knex.select().table('starship').where('id', args.id).first(),    
    vehicle: (root, args, context) => knex.select().table('vehicle').where('id', args.id).first(),     
  },
  Person: {
    homeworld: (root, args, context) => knex.select().table('planet').where('id', root.homeworld).first(),
    specieses: (root, args, context) => knex.select().table('species').join('species_person', 'species_id', '=', 'species.id').where('species_person.person_id', root.id),    
    starships: (root, args, context) => knex.select().table('starship').join('starship_pilot', 'starship_id', '=', 'starship.id').where('starship_pilot.person_id', root.id),
    vehicles: (root, args, context) => knex.select().table('vehicle').join('vehicle_pilot', 'vehicle_id', '=', 'vehicle.id').where('vehicle_pilot.person_id', root.id),
  },
  Species: {
    persons: (root, args, context) => knex.select().table('person').join('species_person', 'person_id', '=', 'person.id').where('species_person.species_id', root.id),
    planet: (root, args, context) => knex.select().table('planet').where('id', root.homeworld).first(), 
  },
  Planet: {
    persons: (root, args, context) => knex.select().table('person').where('homeworld', root.id),
    specieses: (root, args, context) => knex.select().table('species').where('homeworld', root.id), 
  },
  Starship: {
    persons: (root, args, context) => knex.select().table('person').join('starship_pilot', 'person_id', '=', 'person.id').where('starship_pilot.starship_id', root.id),
  },
  Vehicle: {
    persons: (root, args, context) => knex.select().table('person').join('vehicle_pilot', 'person_id', '=', 'person.id').where('vehicle_pilot.vehicle_id', root.id),
  }
};

module.exports = resolvers;
