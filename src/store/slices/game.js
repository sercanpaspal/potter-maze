import { createSlice } from "@reduxjs/toolkit";

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

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState: (state, action) => {
      return { ...state, ...action.payload };
    },
    setGameWinner: (state, action) => {
      state.winnerUser = action.payload;
    },
  },
});

export const { setGameState, setGameWinner } = gameSlice.actions;

export default gameSlice.reducer;
