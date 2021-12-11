const board = require("./board");
const _ = require("lodash");

const Game = (room) => {
  const users = room.map(({ socket, ...user }) => user);

  const state = {
    board,
    users,
    turnUser: users[0],
  };

  const emitAll = (event, ...args) =>
    room.forEach(({ socket }) => {
      socket.emit(event, ...args);
    });

  emitAll("gameState", state);

  room.forEach(({ socket, ...user }) => {
    socket.on("gameDice", () => {
      console.log("hello");
      const dice = _.random(1, 6);
      console.log(dice);
    });
  });
};

module.exports = Game;
