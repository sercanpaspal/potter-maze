const _ = require("lodash");
const board = require("./board");
const cards = _.shuffle(require("./cards"));

const Game = (room) => {
  const users = room.map(({ socket, ...user }) => user);

  let state = {
    board,
    users,
    turnUser: users[0],
    dice: null,
    card: null,
  };

  const emitAll = (event, ...args) =>
    room.forEach(({ socket }) => {
      socket.emit(event, ...args);
    });

  emitAll("gameState", state);

  room.forEach(({ socket, ...user }) => {
    socket.on("gameDice", () => {
      if (!state.dice) {
        state.dice = 4; //_.random(1, 6);
        state.turnUser.position += state.dice;
        state.users = state.users.map((u) =>
          u.id === state.turnUser.id ? state.turnUser : u
        );

        emitAll("gameState", { dice: state.dice });

        const checkBoard = () => {
          const col = board[state.turnUser.position];
          if (col.type === "card") {
            state.card = cards.pop();

            emitAll("gameState", { card: state.card });

            state.turnUser.position += state.card.position;
            state.turnUser.waitTurn = state.card.waitTurn;
            state.users = state.users.map((u) =>
              u.id === state.turnUser.id ? state.turnUser : u
            );
            emitAll("gameState", { users: state.users });
          }
        };

        setTimeout(() => {
          emitAll("gameState", { users: state.users });

          setTimeout(checkBoard, 1000);
        }, 3000);
      }
    });
  });
};

module.exports = Game;
