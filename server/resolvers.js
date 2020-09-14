const resolvers = {
  Query: {
    // books: () => seed.books,
    // users: () => seed.users,
    // chirps: () => seed.chirps,
    users: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      const newUser = context.prisma.link.create({
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
      return newUser;
    },
  },
};
export default resolvers;
