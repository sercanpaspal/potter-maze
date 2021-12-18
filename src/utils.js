export const getRoomId = () =>
  new URLSearchParams(window.location.search).get("roomId");

export const getRoomUrl = (id) => `${window.location.origin}/?roomId=${id}`;
