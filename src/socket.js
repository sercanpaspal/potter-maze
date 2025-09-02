import { io } from "socket.io-client";

const socketUrl = `${window.location.protocol}//${window.location.hostname}`;

const socket = io(socketUrl, {
  transports: ["websocket"],
});

export default socket;
