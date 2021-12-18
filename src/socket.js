import { io } from "socket.io-client";
import { store } from "./store";

const socketUrl = process.env.REACT_APP_SOCKET_PORT
  ? `${window.location.protocol}//${window.location.hostname}:${process.env.REACT_APP_SOCKET_PORT}`
  : window.location.origin;

const socket = io(socketUrl, {
  transports: ["websocket"],
});

export const socketOnDispatch = (eventName, fn) =>
  socket.on(eventName, (...args) => store.dispatch(fn(...args)));

export default socket;
