import { takeLatest, put } from "redux-saga/effects";
import {ActionEvents, SceneEvents} from "../../constants/enums";
import {eventChannel} from "redux-saga";
import socket from "../../socket";
import {setScene} from "../slices/scene";

const createSocketChannel = event => eventChannel((emit) => {
  socket.on(event, emit);
  return () => socket.off(event, emit);
});

export default function* socketSpawn() {
  for (const { event, scene } of SceneEvents) {
    yield takeLatest(createSocketChannel(event), function* (){
      yield put(setScene(scene));
    });
  }

  for (const { event, action } of ActionEvents) {
    yield takeLatest(createSocketChannel(event), function* (...args){
      yield put(action(...args));
    });
  }
}