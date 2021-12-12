const _ = require("lodash");
const board = require("./data/board");

const Game = (room) => {
  let users = room.map(({ socket, ...user }) => user);
  const cards = require("./data/cards");
  const treasures = _.shuffle(require("./data/treasures"));

  let state = {
    board,
    users,
    infos: [],
    turnUser: users[0],
    dice: null,
    card: null,
    treasure: null,
  };

  const emitAll = (event, ...args) =>
    room.forEach(({ socket }) => {
      socket.emit(event, ...args);
    });

  const emitInfo = (type, payload) => {
    state.infos.push({ type, payload });
    emitAll("gameState", { infos: state.infos });
  };

  emitAll("gameState", state);

  room.forEach(({ socket, ...user }) => {
    socket.on("gameDice", () => {
      if (!state.dice) {
        state.dice = 4; //_.random(1, 6);
        const nextPosition = state.turnUser.position + state.dice;
        state.turnUser.position =
          nextPosition > board.length - 1 ? board.length - 1 : nextPosition;
        state.users = state.users.map((u) =>
          u.id === state.turnUser.id ? state.turnUser : u
        );

        emitAll("gameState", { dice: state.dice });

        emitInfo("dice", state.dice);

        setTimeout(() => {
          emitAll("gameState", { users: state.users });

          setTimeout(checkBoard, 1000);
        }, 3000);

        const onGoblet = () => {
          emitAll("gameWinner", state.turnUser);
        };

        const onTreasure = () => {
          state.treasure = treasures.pop();
          treasures.unshift(state.treasure);

          emitAll("gameState", { treasure: state.treasure });
        };

        const onCard = () => {
          state.card = cards.pop();
          cards.unshift(state.card);

          emitAll("gameState", { card: state.card });

          emitInfo("card", state.card);

          state.turnUser.position += state.card.position;
          state.turnUser.waitTurn = state.card.waitTurn;
          state.users = state.users.map((u) =>
            u.id === state.turnUser.id ? state.turnUser : u
          );

          setTimeout(() => {
            emitAll("gameState", { users: state.users });

            if (state.card.position !== 0) {
              setTimeout(checkBoard, 1000);
            }
          }, 3000);
        };

        const checkBoard = () => {
          switch (board[state.turnUser.position].type) {
            case "goblet":
              onGoblet();
              break;
            case "treasure":
              onTreasure();
              break;
            case "card":
              onCard();
              break;
            default:
              break;
          }
        };
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
