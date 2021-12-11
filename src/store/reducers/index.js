import { combineReducers } from "redux";
import scene from "./scene";
import user from "./user";
import room from "./room";

export default combineReducers({
  scene,
  user,
  room,
});
