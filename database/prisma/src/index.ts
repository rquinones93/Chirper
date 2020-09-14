const { prisma } = require('../generated/prisma-client');

async function main() {
  const newUser = await prisma.createUser({
    data: {
      created_at: new Date(),
      bio: 'This is a bio',
      username: 'Liam1515',
      password: 'IRequireThePylons',
      pinnedChirp: 0,
      privacyStatus: 1,
      profilePicture: 'a-string',
    },
  });
  console.log('Created new user: ', newUser);

  const allUsers = await prisma.user.findMany();
  console.log('All users: ');
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.disconnect());
