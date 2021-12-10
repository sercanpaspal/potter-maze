const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;
const dotenv = require("dotenv");
const uuid = require("uuid");

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer);

const ROOMS = [];
const MAX_USER = 4;
const MIN_USER = 2;
io.on("connection", (socket) => {
  const playerId = uuid.v4();

  const makePlayer = (nickname, figure) => ({
    id: playerId,
    nickname,
    socket,
    figure,
  });

  socket.on("roomCreate", (nickname, figure) => {
    console.log(ROOMS, playerId);
    ROOMS[playerId] = [makePlayer(nickname, figure)];

    socket.emit("roomCreated", playerId);
    socket.emit("roomState", ROOMS[playerId]);
  });

  socket.on("roomRemove", (roomId) => delete ROOMS[roomId]);

  socket.on(
    "roomCheck",
    (roomId) => !ROOMS[roomId] && socket.emit("roomNotExist")
  );

  socket.on("roomJoin", (roomId, nickname, figure) => {
    const room = ROOMS[roomId];
    if (room && room.length <= MAX_USER) {
      room.append(makePlayer(nickname, figure));
      socket.emit("roomState", room);
    } else {
      socket.emit("roomNotExist");
    }
  });

  socket.on("roomStart", (roomId) => {
    const room = ROOMS[roomId];

    if (roomId === playerId && room.length >= MIN_USER) {
      console.log("GAME START");
    }
  });

  const disconnect = () => {
    for (const roomId in Object.keys(ROOMS)) {
      ROOMS[roomId] = ROOMS[roomId].filter((p) => p.id !== playerId);
    }
  };

  socket.on("leave", disconnect);

  socket.on("disconnect", disconnect);
});

console.log("Server started!");

httpServer.listen(process.env.PORT || 3000);
