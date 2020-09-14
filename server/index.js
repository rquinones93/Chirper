import { ApolloServer } from 'apollo-server';
import prisma from 'prisma';

import typeDefs from './schema';
import resolvers from './resolvers';

// import Mutations from './resolvers';
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
