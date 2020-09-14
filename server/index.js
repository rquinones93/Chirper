import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

import typeDefs from './schema';
import resolvers from './resolvers';

//www.howtographql.com/graphql-js/5-connecting-server-and-database/
const prisma = new PrismaClient();
const server = new ApolloServer({ typeDefs, resolvers, context: { prisma } });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
