import { createStore } from "redux";
import middlewares from "./middlewares";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, middlewares);
