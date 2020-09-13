import seed from './seed';

const resolvers = {
  Query: {
    books: () => seed.books,
    users: () => seed.users,
    // user: (parent, args, context, info) => {
    //   return seed.users.find((user) => user.id === args.id);
    // },
    chirps: () => seed.chirps,
    // chirp: (parent, args, context, info) => {
    //   return seed.chirps.filter((chirp) => chirp.user_id === args.user_id);
    // },
  },
};
export default resolvers;
