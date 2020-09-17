"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('./generated/prisma-client'),
    prisma = _require.prisma; // A `main` function so that we can use async/await


function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var allUsers, allChirps, newChirp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return prisma.users();

          case 2:
            allUsers = _context.sent;
            console.log("Retrieved all published posts: ", allUsers);
            _context.next = 6;
            return prisma.chirps();

          case 6:
            allChirps = _context.sent;
            console.log('Retrieved all chirps', allChirps); //   const newUser = await prisma.createUser({
            //     username: 'Roobert',
            //     bio: 'barista man',
            //   });
            //   const newUser1 = await prisma.createUser({
            //     username: 'jdom',
            //     bio: 'synth guy and doggy daddy ',
            //   });
            //   console.log(newUser, newUser1);

            _context.next = 10;
            return prisma.createChirp({
              content: 'Akemies Taiko is a wild six-operator percussion module' // owner: 1,

            });

          case 10:
            newChirp = _context.sent;
            console.log(newChirp);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main().then(function () {
  process.exit(0);
})["catch"](function (e) {
  return console.error(e);
});