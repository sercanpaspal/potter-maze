import { createSlice } from "@reduxjs/toolkit";
import { Themes } from "../../constants/enums";

const initialState = localStorage.getItem("theme") || Themes.GRYFFINDOR.key;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (_, action) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
