const _ = require("lodash");
const board = require("./data/board");

const Game = (room) => {
  let users = _.shuffle(room.map(({ socket, ...user }) => user));
  const cards = require("./data/cards");
  const treasures = require("./data/treasures");

  let state = {
    board,
    users,
    infos: [],
    turnUser: null,
    dice: null,
    card: null,
    treasure: null,
  };

  const nextTurn = () => {
    state.turnUser = { ...state.users.pop() };
    state.users.unshift(state.turnUser);
    state.dice = null;

    if (state.turnUser.waitTurn > 0) {
      state.turnUser.waitTurn -= 1;

      emitInfo(
        "text",
        `henüz kendine gelemedin, ${
          state.turnUser.waitTurn > 0
            ? `${state.turnUser.waitTurn} tur daha bekle`
            : `sonraki tur katılabilirsin`
        }`
      );

      updateUserList();

      setTimeout(nextTurn, 3000);
    } else {
      emitAll("gameState", state);
    }
  };

  const drawCard = () => {
    state.card = cards.pop();
    cards.unshift(state.card);
  };

  const drawTreasure = () => {
    state.treasure = treasures.pop();
    treasures.unshift(state.treasure);
  };

  const dice = () => {
    state.dice = state.turnUser.felix ? _.random(4, 6) : _.random(1, 6);
    state.turnUser.felix = false;

    emitAll("gameState", { dice: state.dice });

    emitInfo("dice", state.dice);
  };

  const nextPosition = () => {
    const nextPosition = state.turnUser.position + state.dice;
    state.turnUser.position =
      nextPosition > board.length - 1 ? board.length - 1 : nextPosition;
  };

  const emitAll = (event, ...args) =>
    room.forEach(({ socket }) => {
      socket.emit(event, ...args);
    });

  const emitInfo = (type, payload) => {
    state.infos.push({ type, payload });
    emitAll("gameState", { infos: state.infos });
  };

  const updateUserList = () =>
    (state.users = state.users.map((u) =>
      u.id === state.turnUser.id ? state.turnUser : u
    ));

  nextTurn();

  room.forEach(({ socket, ...user }) => {
    socket.on("gameDice", () => {
      if (!state.dice) {
        dice();

        nextPosition();

        updateUserList();

        setTimeout(() => {
          emitAll("gameState", { users: state.users });

          setTimeout(checkBoard, 1000);
        }, 3000);

        const onGoblet = () => emitAll("gameWinner", state.turnUser);

        const onTreasure = () => {
          drawTreasure();

          switch (state.treasure.type) {
            case "protection":
              state.turnUser.protections.push(state.treasure);
              break;
            case "felix":
              state.turnUser.felix = true;
            default:
              break;
          }

          emitAll("gameState", { treasure: state.treasure });

          emitInfo("treasure", state.treasure);

          setTimeout(nextTurn, 3000);
        };

        const onCard = () => {
          drawCard();

          emitAll("gameState", { card: state.card });

          emitInfo("card", state.card);

          switch (state.card.type) {
            case "move":
              state.turnUser.position += state.card.position;
              break;
            case "monster":
              if (state.turnUser.protections.length > 0) {
                setTimeout(() => {
                  const protection = state.turnUser.protections.pop();
                  emitInfo("text", `${protection.title} kullanıldı!`);
                }, 3000);
              } else {
                state.turnUser.waitTurn = state.card.waitTurn;
              }
            default:
              break;
          }

          updateUserList();

          setTimeout(() => {
            emitAll("gameState", { users: state.users });

            if (state.card.position !== 0) {
              setTimeout(checkBoard, 1000);
            } else {
              setTimeout(nextTurn, 1000);
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
              nextTurn();
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
