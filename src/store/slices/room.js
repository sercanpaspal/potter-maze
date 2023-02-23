import { createSlice } from "@reduxjs/toolkit";
import { getRoomId } from "../../utils";

const initialState = {
  id: getRoomId() || null,
  users: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomId: (state, action) => {
      state.id = action.payload;
    },
    setRoomUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setRoomId, setRoomUsers } = roomSlice.actions;

export default roomSlice.reducer;
