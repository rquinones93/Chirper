import seed from './seed';

const resolvers = {
  Query: {
    books: () => seed.books,
    users: () => seed.users,
    chirps: () => seed.chirps,
  },
};
export default resolvers;
