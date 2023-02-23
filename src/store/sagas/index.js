import { takeLatest, select, put, spawn } from "redux-saga/effects";
import { Scenes } from "../../constants/enums";
import socket from "../../socket";
import { getRoom, getUser } from "../selectors";
import { setGameWinner } from "../slices/game";
import { setScene } from "../slices/scene";
import { setTheme } from "../slices/theme";
import socketSpawn from "./socketSpawn";

function* watchSceneChanges({ payload }) {
  const room = yield select(getRoom);
  const user = yield select(getUser);

  switch (payload) {
    case Scenes.CREATE_ROOM:
      socket.emit("roomCreate", user);
      break;
    case Scenes.WAIT_ROOM:
      socket.emit("roomJoin", room.id, user);
      break;
    case Scenes.MENU:
      socket.emit("roomLeave");
      window.history.pushState(null, "Home", "/");
      break;
    default:
      break;
  }
}

function* watchGameWinner() {
  yield put(setScene(Scenes.GAME_END));
}

function* watchThemeChanges({ payload }) {
  yield localStorage.setItem("theme", payload);
}

function* saga() {
  yield takeLatest(setScene.toString(), watchSceneChanges);
  yield takeLatest(setGameWinner.toString(), watchGameWinner);
  yield takeLatest(setTheme.toString(), watchThemeChanges);

  yield spawn(socketSpawn);
}

export default saga;
