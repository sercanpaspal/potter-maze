import { store } from ".";
import { Scenes } from "../constants/enums";
import {
  SET_ROOM_ID,
  SET_ROOM_USERS,
  SET_SCENE,
  SET_USER,
} from "./actionTypes";

export const setRoomId = (id) =>
  store.dispatch({ type: SET_ROOM_ID, payload: id });

export const setRoomUsers = (users) =>
  store.dispatch({ type: SET_ROOM_USERS, payload: users });

export const setSceneKickedRoom = () =>
  changeScene(Scenes.KICKED_ROOM)(store.dispatch);

export const setSceneNotExistsRoom = () =>
  changeScene(Scenes.NOT_EXISTS_ROOM)(store.dispatch);

export const setSceneGame = () => changeScene(Scenes.GAME)(store.dispatch);

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
