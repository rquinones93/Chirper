const { prisma } = require('./generated/prisma-client');

// A `main` function so that we can use async/await
async function main() {
  // Retrieve all published posts
  const allUsers = await prisma.users();
  console.log(`Retrieved all published posts: `, allUsers);
  const allChirps = await prisma.chirps();
  console.log('Retrieved all chirps', allChirps);
  //   const newUser = await prisma.createUser({
  //     username: 'Roobert',
  //     bio: 'barista man',
  //   });

  //   const newUser1 = await prisma.createUser({
  //     username: 'jdom',
  //     bio: 'synth guy and doggy daddy ',
  //   });

  //   const newUser3 = await prisma.createUser({
  //     username: 'omara',
  //     bio: 'Amazon incoming',
  //   });

  //   const newUser4 = await prisma.createUser({
  //     username: 'Jesus',
  //     bio: 'Oklahoma man',
  //   });

  // const newChirp = await prisma.createChirp({
  //   content: 'Akemies Taiko is a wild six-operator percussion module',
  //   owner: 1,
  // });
  // console.log(newChirp);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => console.error(e));
