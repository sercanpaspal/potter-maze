import { SET_GAME_STATE, SET_GAME_WINNER } from "../actionTypes";

const initialState = {
  board: [],
  users: [],
  infos: [],
  turnUser: null,
  dice: null,
  card: null,
  treasure: null,
  winnerUser: null,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case SET_GAME_WINNER:
      return {
        ...state,
        winnerUser: action.payload,
      };
    default:
      return state;
  }
};

export default game;
