// import express, mongoose and apollo
const express = require('express');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and pass in schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// integrate Apollo server with Express as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log GQL Playground URL
    console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
