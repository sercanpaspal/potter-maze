import { createSlice } from "@reduxjs/toolkit";
import { socketOnDispatch } from "../../socket";

const initialState = {
  id: null,
  name: "",
  figure: "moony",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setUser, setUserId } = userSlice.actions;

socketOnDispatch("id", setUserId);

export default userSlice.reducer;
