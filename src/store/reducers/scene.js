import { Scenes } from "../../constants/enums";
import { SET_SCENE } from "../actionTypes";

const scene = (state = Scenes.MENU, action) => {
  switch (action.type) {
    case SET_SCENE:
      return action.payload;
    default:
      return state;
  }
};

export default scene;
