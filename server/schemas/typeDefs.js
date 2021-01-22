// import gql
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type Movie {
    _id: ID
    movieId: Int
    posterURL: String
    title: String
  }

  type User {
    _id: ID!
    username: String
    password: String
    movieCount: Int
    addedMovies: [Movie]
  }

  type Query {
    users: [User]
    me: User
    user(username: String!): User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    addMovie(movie: addMovieInput): User
    removeMovie(movieId: Int!): User
  }

  input addMovieInput {
    movieId: Int
    title: String
    posterURL: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;