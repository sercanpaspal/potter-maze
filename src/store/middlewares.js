import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SET_SCENE } from "./actionTypes";
import { Scenes } from "../constants/enums";
import { socket } from "../App";

const baseMiddleware = (store) => (next) => (action) => {
  const { user, room } = store.getState();

  if (action.type === SET_SCENE) {
    if (action.payload === Scenes.CREATE_ROOM) {
      socket.emit("roomCreate", user);
    } else if (action.payload === Scenes.WAIT_ROOM) {
      socket.emit("roomJoin", room.id, user);
    } else if (action.payload === Scenes.MENU) {
      socket.emit("cancel");
      window.history.pushState(null, "Home", "/");
    }
  }

  return next(action);
};

const middlewares = applyMiddleware(thunk, baseMiddleware);

export default middlewares;
