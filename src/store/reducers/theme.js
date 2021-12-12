import { Themes } from "../../constants/enums";
import { SET_THEME } from "../actionTypes";

const initialState = localStorage.getItem("theme") || Themes.GRYFFINDOR;

const theme = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default theme;
