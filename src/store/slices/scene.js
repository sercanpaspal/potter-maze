import { createSlice } from "@reduxjs/toolkit";
import { Scenes } from "../../constants/enums";
import { socketOnDispatch } from "../../socket";
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

socketOnDispatch("roomNotExists", () => setScene(Scenes.NOT_EXISTS_ROOM));

socketOnDispatch("roomKicked", () => setScene(Scenes.KICKED_ROOM));

socketOnDispatch("roomStarted", () => setScene(Scenes.GAME));

export default sceneSlice.reducer;
