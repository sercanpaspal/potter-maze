export const getRoomId = () =>
  new URLSearchParams(window.location.search).get("roomId");

export const getRoomUrl = (id) => `${window.location.origin}/?roomId=${id}`;

export const socketUrl = process.env.REACT_APP_SOCKET_PORT
  ? `${window.location.protocol}//${window.location.hostname}:${process.env.REACT_APP_SOCKET_PORT}`
  : window.location.origin;
