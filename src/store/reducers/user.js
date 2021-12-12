import { SET_USER, SET_USER_ID } from "../actionTypes";

const initialState = {
  id: null,
  name: "sercan",
  figure: "aylak",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default user;
