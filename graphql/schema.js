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
  }

  type Query {
    persons: [Person],
    planets: [Planet],
  }
`);

module.exports = schema;