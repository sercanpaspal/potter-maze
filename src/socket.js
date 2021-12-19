import { io } from "socket.io-client";
import { store } from "./store";

const socketPort = process?.env?.REACT_APP_SOCKET_PORT;

const socketUrl = `${window.location.protocol}//${window.location.hostname}${
  socketPort ? `:${socketPort}` : ""
}`;

const socket = io(socketUrl, {
  transports: ["websocket"],
});

export const socketOnDispatch = (eventName, fn) =>
  socket.on(eventName, (...args) => store.dispatch(fn(...args)));

export default socket;
