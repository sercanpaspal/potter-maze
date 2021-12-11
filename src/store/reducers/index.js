import { combineReducers } from "redux";
import scene from "./scene";
import user from "./user";
import room from "./room";
import game from "./game";
import theme from "./theme";

export default combineReducers({
  scene,
  user,
  room,
  game,
  theme,
});
