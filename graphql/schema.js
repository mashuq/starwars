const { gql } = require('apollo-server-hapi');

let schema = gql(`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`);

module.exports = schema;