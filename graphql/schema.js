const { gql } = require('apollo-server-hapi');

let schema = gql(`
  type Person {
    id: ID
    name: String
    height: Int
    mass: Float
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: Planet
    specieses : [Species]
    starships: [Starship]
    vehicles: [Vehicle]
  }

  type Species {
    id: ID
    name: String
    classification: String
    designation: String
    average_height: Int
    hair_colors: String
    skin_colors: String
    eye_colors: String
    birth_year: String
    average_lifespan: Int
    homeworld: Planet
    language: String
    persons: [Person]
    planet: Planet
  }


  type Planet {
    id: ID,
    name : String,
    rotation_period: Int
    orbital_period: Int
    diameter: Int    
    climate: String
    gravity: String
    terrain: String
    surface_water: Int
    population: Int
    persons: [Person]
    specieses: [Species]
  }

  type Starship{
    id: ID,
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: Float,
    length: Int
    max_atmosphering_speed: Int
    crew: Int
    passengers: Int
    cargo_capacity: Float,
    consumables: Float,
    hyperdrive_rating: Float,
    mglt: Int
    starship_class: String
    persons: [Person]
  }

  type Vehicle{
    id: ID,
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: Float,
    length: Int
    max_atmosphering_speed: Int
    crew: Int
    passengers: Int
    cargo_capacity: Float,
    consumables: Float,
    vehicle_class: String,
    persons: [Person]
  }

  type Query {
    persons: [Person],
    specieses: [Species],
    planets: [Planet],
    starships: [Starship],    
    vehicles: [Vehicle],
    
    person(id: ID!): Person
    planet(id: ID!): Planet
    starship(id: ID!): Starship
    vehicle(id: ID!): Vehicle
    species(id: ID!): Species
  }
`);

module.exports = schema;