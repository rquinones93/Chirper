const { prisma } = require('./generated/prisma-client');
import { ApolloServer, gql } from 'apollo-server';
import resolvers from './resolvers';

const typeDefs = gql`
  scalar DateTime

  type Chirp {
    id: ID!
    content: String!
    createdAt: DateTime
    updatedAt: DateTime
    owner: User!
  }

  type User {
    id: ID!
    bio: String
    chirps: [Chirp]
    createdAt: DateTime
    password: String
    pinnedChirp: Int
    privacyStatus: Int
    profilePicture: String
    updatedAt: DateTime
    username: String!
  }

  type Query {
    chirpsByUser(userId: ID!): [Chirp]
    users: [User]
    userById(userById: ID): User
  }

  type Mutation {
    createUser(username: String!, bio: String): User
    createChirp(content: String, owner: Int): Chirp
    # markTaskAsCompleted(taskId: ID!): Task
  }
`;

const server = new ApolloServer({
  // typeDefs: './database/prisma/src/schema.graphql', // still figuring out how to manage this in apollo in an external file TODO: Look into an ORM in order to only have to have a single source file
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

// server.start(() => console.log('Server is running on http://localhost:4000')); // yoga version
server.listen().then(({ url }) => {
  // apollo version
  console.log(`🚀  Server ready at ${url}`);
});
