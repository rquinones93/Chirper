"use strict";

var _apolloServer = require("apollo-server");

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  scalar DateTime\n\n  type Chirp {\n    id: ID!\n    content: String!\n    createdAt: DateTime\n    updatedAt: DateTime\n    owner: User!\n  }\n\n  type User {\n    id: ID!\n    bio: String\n    chirps: [Chirp]\n    createdAt: DateTime\n    password: String\n    pinnedChirp: Int\n    privacyStatus: Int\n    profilePicture: String\n    updatedAt: DateTime\n    username: String!\n  }\n\n  type Query {\n    chirpsByUser(userId: ID!): [Chirp]\n    users: [User]\n    userById(userById: ID): User\n  }\n\n  type Mutation {\n    createUser(username: String!, bio: String): User\n    createChirp(content: String, owner: Int): Chirp\n    # markTaskAsCompleted(taskId: ID!): Task\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('./generated/prisma-client'),
    prisma = _require.prisma;

var typeDefs = (0, _apolloServer.gql)(_templateObject());
var server = new _apolloServer.ApolloServer({
  // typeDefs: './database/prisma/src/schema.graphql', // still figuring out how to manage this in apollo in an external file TODO: Look into an ORM in order to only have to have a single source file
  typeDefs: typeDefs,
  resolvers: _resolvers["default"],
  context: {
    prisma: prisma
  }
}); // server.start(() => console.log('Server is running on http://localhost:4000')); // yoga version

server.listen().then(function (_ref) {
  var url = _ref.url;
  // apollo version
  console.log("\uD83D\uDE80  Server ready at ".concat(url));
});