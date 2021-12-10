import { SET_SCENE, SET_USER } from "./actionTypes";

export const changeScene = (scene) => (dispatch) =>
  dispatch({
    type: SET_SCENE,
    payload: scene,
  });

export const setUser = (user) => (dispatch) =>
  dispatch({
    type: SET_USER,
    payload: user,
  });
