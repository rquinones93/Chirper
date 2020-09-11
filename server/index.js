import { ApolloServer, gql } from 'apollo-server';
import seed from './seed';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Chirp {
    id: Int
    content: String
    user_id: Int
  }

  type User {
    id: Int
    bio: String
    username: String
  }

  type Query {
    books: [Book]
    chirps: [Chirp]
    users: [User]
  }
`;
const resolvers = {
  Query: {
    books: () => seed.books,
    users: () => seed.users,
    chirps: () => seed.chirps,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
