import { SET_SCENE } from "./actionTypes";

export const changeScene = (scene) => (dispatch) =>
  dispatch({
    type: SET_SCENE,
    payload: scene,
  });
