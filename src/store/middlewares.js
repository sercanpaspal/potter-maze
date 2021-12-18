import { Scenes } from "../constants/enums";
import socket from "../socket";
import { setScene } from "./slices/scene";
import { setGameWinner } from "./slices/game";
import { setTheme } from "./slices/theme";

const sceneMiddleware = (store) => (next) => (action) => {
  const { user, room } = store.getState();

  if (action.type === setScene.toString()) {
    switch (action.payload) {
      case Scenes.CREATE_ROOM:
        socket.emit("roomCreate", user);
        break;
      case Scenes.WAIT_ROOM:
        socket.emit("roomJoin", room.id, user);
        break;
      case Scenes.MENU:
        socket.emit("roomLeave");
        window.history.pushState(null, "Home", "/");
        break;
      default:
        break;
    }
  }

  return next(action);
};

const gameMiddleware = (store) => (next) => (action) => {
  if (action.type === setGameWinner.toString()) {
    store.dispatch(setScene(Scenes.GAME_END));
  }

  return next(action);
};

const themeMiddleware = (store) => (next) => (action) => {
  if (action.type === setTheme.toString()) {
    localStorage.setItem("theme", action.payload);
  }

  return next(action);
};

const middlewares = [sceneMiddleware, themeMiddleware, gameMiddleware];

export default middlewares;
