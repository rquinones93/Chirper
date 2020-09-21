module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateChirp {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Chirp {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  content: String!
  owner: User!
}

type ChirpConnection {
  pageInfo: PageInfo!
  edges: [ChirpEdge]!
  aggregate: AggregateChirp!
}

input ChirpCreateInput {
  id: ID
  content: String!
  owner: UserCreateOneWithoutChirpsInput!
}

input ChirpCreateManyWithoutOwnerInput {
  create: [ChirpCreateWithoutOwnerInput!]
  connect: [ChirpWhereUniqueInput!]
}

input ChirpCreateWithoutOwnerInput {
  id: ID
  content: String!
}

type ChirpEdge {
  node: Chirp!
  cursor: String!
}

enum ChirpOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  content_ASC
  content_DESC
}

type ChirpPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  content: String!
}

input ChirpScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [ChirpScalarWhereInput!]
  OR: [ChirpScalarWhereInput!]
  NOT: [ChirpScalarWhereInput!]
}

type ChirpSubscriptionPayload {
  mutation: MutationType!
  node: Chirp
  updatedFields: [String!]
  previousValues: ChirpPreviousValues
}

input ChirpSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChirpWhereInput
  AND: [ChirpSubscriptionWhereInput!]
  OR: [ChirpSubscriptionWhereInput!]
  NOT: [ChirpSubscriptionWhereInput!]
}

input ChirpUpdateInput {
  content: String
  owner: UserUpdateOneRequiredWithoutChirpsInput
}

input ChirpUpdateManyDataInput {
  content: String
}

input ChirpUpdateManyMutationInput {
  content: String
}

input ChirpUpdateManyWithoutOwnerInput {
  create: [ChirpCreateWithoutOwnerInput!]
  delete: [ChirpWhereUniqueInput!]
  connect: [ChirpWhereUniqueInput!]
  set: [ChirpWhereUniqueInput!]
  disconnect: [ChirpWhereUniqueInput!]
  update: [ChirpUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ChirpUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ChirpScalarWhereInput!]
  updateMany: [ChirpUpdateManyWithWhereNestedInput!]
}

input ChirpUpdateManyWithWhereNestedInput {
  where: ChirpScalarWhereInput!
  data: ChirpUpdateManyDataInput!
}

input ChirpUpdateWithoutOwnerDataInput {
  content: String
}

input ChirpUpdateWithWhereUniqueWithoutOwnerInput {
  where: ChirpWhereUniqueInput!
  data: ChirpUpdateWithoutOwnerDataInput!
}

input ChirpUpsertWithWhereUniqueWithoutOwnerInput {
  where: ChirpWhereUniqueInput!
  update: ChirpUpdateWithoutOwnerDataInput!
  create: ChirpCreateWithoutOwnerInput!
}

input ChirpWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  owner: UserWhereInput
  AND: [ChirpWhereInput!]
  OR: [ChirpWhereInput!]
  NOT: [ChirpWhereInput!]
}

input ChirpWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createChirp(data: ChirpCreateInput!): Chirp!
  updateChirp(data: ChirpUpdateInput!, where: ChirpWhereUniqueInput!): Chirp
  updateManyChirps(data: ChirpUpdateManyMutationInput!, where: ChirpWhereInput): BatchPayload!
  upsertChirp(where: ChirpWhereUniqueInput!, create: ChirpCreateInput!, update: ChirpUpdateInput!): Chirp!
  deleteChirp(where: ChirpWhereUniqueInput!): Chirp
  deleteManyChirps(where: ChirpWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum PrivacyStatus {
  PRIVATE
  PUBLIC
}

type Query {
  chirp(where: ChirpWhereUniqueInput!): Chirp
  chirps(where: ChirpWhereInput, orderBy: ChirpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chirp]!
  chirpsConnection(where: ChirpWhereInput, orderBy: ChirpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChirpConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  chirp(where: ChirpSubscriptionWhereInput): ChirpSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  bio: String
  chirps(where: ChirpWhereInput, orderBy: ChirpOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chirp!]
  createdAt: DateTime!
  password: String
  pinnedChirp: Int
  privacyStatus: PrivacyStatus
  profilePicture: String
  updatedAt: DateTime!
  username: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  bio: String
  chirps: ChirpCreateManyWithoutOwnerInput
  password: String
  pinnedChirp: Int
  privacyStatus: PrivacyStatus
  profilePicture: String
  username: String!
}

input UserCreateOneWithoutChirpsInput {
  create: UserCreateWithoutChirpsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChirpsInput {
  id: ID
  bio: String
  password: String
  pinnedChirp: Int
  privacyStatus: PrivacyStatus
  profilePicture: String
  username: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  bio_ASC
  bio_DESC
  createdAt_ASC
  createdAt_DESC
  password_ASC
  password_DESC
  pinnedChirp_ASC
  pinnedChirp_DESC
  privacyStatus_ASC
  privacyStatus_DESC
  profilePicture_ASC
  profilePicture_DESC
  updatedAt_ASC
  updatedAt_DESC
  username_ASC
  username_DESC
}

type UserPreviousValues {
  id: ID!
  bio: String
  createdAt: DateTime!
  password: String
  pinnedChirp: Int
  privacyStatus: PrivacyStatus
  profilePicture: String
  updatedAt: DateTime!
  username: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  bio: String
  chirps: ChirpUpdateManyWithoutOwnerInput
  password: String
  pinnedChirp: Int
  privacyStatus: PrivacyStatus
  profilePicture: String
  username: String
}

input UserUpdateManyMutationInput {
  bio: String
  password: String
  pinnedChirp: Int
  privacyStatus: PrivacyStatus
  profilePicture: String
  username: String
}

input UserUpdateOneRequiredWithoutChirpsInput {
  create: UserCreateWithoutChirpsInput
  update: UserUpdateWithoutChirpsDataInput
  upsert: UserUpsertWithoutChirpsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChirpsDataInput {
  bio: String
  password: String
  pinnedChirp: Int
  privacyStatus: PrivacyStatus
  profilePicture: String
  username: String
}

input UserUpsertWithoutChirpsInput {
  update: UserUpdateWithoutChirpsDataInput!
  create: UserCreateWithoutChirpsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  chirps_every: ChirpWhereInput
  chirps_some: ChirpWhereInput
  chirps_none: ChirpWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  pinnedChirp: Int
  pinnedChirp_not: Int
  pinnedChirp_in: [Int!]
  pinnedChirp_not_in: [Int!]
  pinnedChirp_lt: Int
  pinnedChirp_lte: Int
  pinnedChirp_gt: Int
  pinnedChirp_gte: Int
  privacyStatus: PrivacyStatus
  privacyStatus_not: PrivacyStatus
  privacyStatus_in: [PrivacyStatus!]
  privacyStatus_not_in: [PrivacyStatus!]
  profilePicture: String
  profilePicture_not: String
  profilePicture_in: [String!]
  profilePicture_not_in: [String!]
  profilePicture_lt: String
  profilePicture_lte: String
  profilePicture_gt: String
  profilePicture_gte: String
  profilePicture_contains: String
  profilePicture_not_contains: String
  profilePicture_starts_with: String
  profilePicture_not_starts_with: String
  profilePicture_ends_with: String
  profilePicture_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`
      }
    