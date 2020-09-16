const resolvers = {
  Query: {
    chirpsByUser(parent, args, context) {
      return context.prisma.link.chirps({ id: args.userId });
    },
    users(parent, args, context) {
      return context.prisma.link.findMany();
    },
    userById(parent, args, context) {
      return contextprisma.users({ id: args.userId });
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
  },
};

module.exports = resolvers;
