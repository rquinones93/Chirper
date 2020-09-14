const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    bio: String
    created_at: String
    password: String
    pinnedChirp: Int
    privacyStatus: Int
    profilePicture: String
    username: String!
  }

  type Chirp {
    id: ID!
    content: String!
    created_at: String
    user_id: Int!
  }

  type Query {
    chirps: [Chirp]
    chirp(user_id: ID!): [Chirp]
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(id: ID, username: String): String
  }
`;

module.exports = typeDefs;
