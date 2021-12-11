import { SET_USER } from "../actionTypes";

const initialState = {
  name: "sercan",
  figure: "howler",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default user;
