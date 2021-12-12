import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SET_GAME_WINNER, SET_SCENE, SET_THEME } from "./actionTypes";
import { Scenes } from "../constants/enums";
import { socket } from "../App";

const sceneMiddleware = (store) => (next) => (action) => {
  const { user, room } = store.getState();

  if (action.type === SET_SCENE) {
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
  if (action.type === SET_GAME_WINNER) {
    store.dispatch({ type: SET_SCENE, payload: Scenes.GAME_END });
  }

  return next(action);
};

const themeMiddleware = (store) => (next) => (action) => {
  if (action.type === SET_THEME) {
    localStorage.setItem("theme", action.payload);
  }

  return next(action);
};

const middlewares = applyMiddleware(
  thunk,
  sceneMiddleware,
  themeMiddleware,
  gameMiddleware
);

export default middlewares;
