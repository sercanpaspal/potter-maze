import { Scenes } from "../../constants/enums";
import { SET_SCENE } from "../actionTypes";

const initialState = Scenes.MENU;

const scene = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCENE:
      return action.payload;
    default:
      return state;
  }
};

export default scene;
