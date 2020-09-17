const resolvers = {
  Query: {
    chirpsByUser(parent, args, context) {
      return context.prisma.link.chirps({ id: args.userId });
    },
    users(parent, args, context) {
      return context.prisma.users();
    },
    userById(parent, args, context) {
      return context.prisma.users({ id: args.userId });
    },
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      return prisma.createUser({
        data: {
          bio: args.bio,
          created_at: new Date(),
          password: 'some-password',
          pinnedChirp: 0,
          privacyStatus: 0,
          profilePicture: 'some-string',
          username: args.username,
        },
      });
    },
    createChirp: (parent, args, context, info) => {
      return prisma.createChirp({
        data: {
          content: args.content,
          owner: args.owner,
        },
      });
    },
  },
};

module.exports = resolvers;
