import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const baseMiddleware = (store) => (next) => (action) => {
  console.log(action.type);

  return next(action);
};

const middlewares = applyMiddleware(thunk, baseMiddleware);

export default middlewares;
