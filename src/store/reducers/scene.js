import { Scenes } from "../../constants/enums";
import { getRoomId } from "../../utils";
import { SET_SCENE } from "../actionTypes";

const initialState = getRoomId() ? Scenes.JOIN_ROOM : Scenes.MENU;

const scene = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCENE:
      return action.payload;
    default:
      return state;
  }
};

export default scene;
