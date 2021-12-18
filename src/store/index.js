import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middlewares";
import reducer from "./slices";

export const store = configureStore({
  reducer,
  middleware,
});
