import { createSlice } from "@reduxjs/toolkit";
import { socketOnDispatch } from "../../socket";
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

socketOnDispatch("roomCreated", setRoomId);

socketOnDispatch("roomUserState", setRoomUsers);

export default roomSlice.reducer;
