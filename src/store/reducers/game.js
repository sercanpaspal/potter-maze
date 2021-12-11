import { SET_GAME_STATE } from "../actionTypes";

const initialState = {
  board: [],
  users: [],
  turnUser: null,
  dice: null,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default game;
