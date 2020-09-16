const { prisma } = require('./generated/prisma-client');
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs: './database/prisma/src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
