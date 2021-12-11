import { Themes } from "../../constants/enums";
import { SET_THEME } from "../actionTypes";

const initialState = Themes.GRYFFINDOR;

const scene = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default scene;
