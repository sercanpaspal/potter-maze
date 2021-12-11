import { store } from ".";
import { Scenes } from "../constants/enums";
import {
  SET_GAME_STATE,
  SET_ROOM_ID,
  SET_ROOM_USERS,
  SET_SCENE,
  SET_THEME,
  SET_USER,
  SET_USER_ID,
} from "./actionTypes";

export const setUserId = (id) =>
  store.dispatch({ type: SET_USER_ID, payload: id });

export const setRoomId = (id) =>
  store.dispatch({ type: SET_ROOM_ID, payload: id });

export const setRoomUsers = (users) =>
  store.dispatch({ type: SET_ROOM_USERS, payload: users });

export const setGameState = (state) =>
  store.dispatch({ type: SET_GAME_STATE, payload: state });

export const setSceneKickedRoom = () =>
  changeScene(Scenes.KICKED_ROOM)(store.dispatch);

export const setSceneNotExistsRoom = () =>
  changeScene(Scenes.NOT_EXISTS_ROOM)(store.dispatch);

export const setSceneGame = () => changeScene(Scenes.GAME)(store.dispatch);

export const changeTheme = (theme) => (dispatch) =>
  dispatch({
    type: SET_THEME,
    payload: theme,
  });

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
