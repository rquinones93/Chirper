const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    bio: String
    password: String
    pinnedChirp: Int
    privacyStatus: Int
    profilePicture: String
    username: String!
  }

  type Chirp {
    id: Int!
    content: String!
    user_id: Int!
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    chirps: [Chirp]
    chirp(user_id: Int!): [Chirp]
    users: [User]
    user(id: Int!): User
  }

  type Mutation {
    createUser(id: ID, username: String): String
  }
`;

module.exports = typeDefs;
