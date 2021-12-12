const _ = require("lodash");
const board = require("./data/board");

const Game = (room) => {
  let users = room.map(({ socket, ...user }) => user);
  const cards = _.shuffle(require("./data/cards"));
  const treasures = _.shuffle(require("./data/treasures"));

  let state = {
    board,
    users,
    turnUser: users[0],
    dice: null,
    card: null,
    treasure: null,
  };

  const emitAll = (event, ...args) =>
    room.forEach(({ socket }) => {
      socket.emit(event, ...args);
    });

  emitAll("gameState", state);

  room.forEach(({ socket, ...user }) => {
    socket.on("gameDice", () => {
      if (!state.dice) {
        state.dice = 1; //_.random(1, 6);
        const nextPosition = state.turnUser.position + state.dice;
        state.turnUser.position =
          nextPosition > board.length - 1 ? board.length - 1 : nextPosition;
        state.users = state.users.map((u) =>
          u.id === state.turnUser.id ? state.turnUser : u
        );

        emitAll("gameState", { dice: state.dice });

        const checkBoard = () => {
          const col = board[state.turnUser.position];
          if (col.type === "goblet") {
            emitAll("gameWinner", state.turnUser);
          } else if (col.type === "treasure") {
            state.treasure = treasures.pop();
            treasures.unshift(state.treasure);

            emitAll("gameState", { treasure: state.treasure });
          } else if (col.type === "card") {
            state.card = cards.pop();
            cards.unshift(state.card);

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

    const disconnect = () => {
      state.users = state.users.filter((u) => u.id !== user.id);
      emitAll("gameState", { users: state.users });
    };

    socket.on("roomLeave", disconnect);

    socket.on("disconnect", disconnect);
  });
};

module.exports = Game;
