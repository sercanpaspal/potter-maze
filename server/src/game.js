const board = require("./board");
const _ = require("lodash");

const Game = (room) => {
  const users = room.map(({ socket, ...user }) => user);

  const state = {
    board,
    users,
    turnUser: users[0],
    dice: null,
  };

  const emitAll = (event, ...args) =>
    room.forEach(({ socket }) => {
      socket.emit(event, ...args);
    });

  emitAll("gameState", state);

  room.forEach(({ socket, ...user }) => {
    socket.on("gameDice", () => {
      if (!state.dice) {
        state.dice = _.random(1, 6);

        emitAll("gameState", { dice: state.dice });
      }
    });
  });
};

module.exports = Game;
