import { createSlice } from "@reduxjs/toolkit";
import { Scenes } from "../../constants/enums";
import { getRoomId } from "../../utils";

const initialState = getRoomId() ? Scenes.JOIN_ROOM : Scenes.MENU;

const sceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setScene: (_, action) => {
      return action.payload;
    },
  },
});

export const { setScene } = sceneSlice.actions;

export default sceneSlice.reducer;
