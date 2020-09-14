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
    updated_at: String
    owner: Int!
  }

  type Query {
    chirps: [Chirp]
    chirp(owner: ID!): [Chirp]
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(bio: String, username: String): String
  }
`;

module.exports = typeDefs;
