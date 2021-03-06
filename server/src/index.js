const express = require("express");
const http = require("http");
const path = require("path");
const Server = require("socket.io").Server;
const dotenv = require("dotenv");
const uuid = require("uuid");
const Game = require("./game");

dotenv.config();

const clientBuildPath = path.join(__dirname, "../../", "build");

const app = express();

app.use(express.static(clientBuildPath));

app.get("/", function (_, res) {
  res.sendFile(clientBuildPath);
});

const httpServer = http.createServer(app);

const io = new Server(httpServer);

const ROOMS = [];
const MAX_USER = 4;
const MIN_USER = 1;

io.on("connection", (socket) => {
  const userId = uuid.v4();

  const makeUser = (name, figure) => ({
    id: userId,
    name,
    socket,
    figure,
    position: 0,
    waitTurn: 0,
    felix: false,
    protections: [],
  });

  socket.emit("id", userId);

  const emitAllRoom = (roomId, event, ...args) => {
    ROOMS[roomId].forEach((user) => {
      user.socket.emit(event, ...args);
    });
  };

  const sendRoomUsers = (roomId) =>
    emitAllRoom(
      roomId,
      "roomUserState",
      ROOMS[roomId].map(({ socket, ...user }) => user)
    );

  const sendRoomStarted = (roomId) =>
    emitAllRoom(
      roomId,
      "roomStarted",
      ROOMS[roomId].map(({ socket, ...user }) => user)
    );

  const sendRoomNotExists = (roomId) => emitAllRoom(roomId, "roomNotExists");

  socket.on("roomCreate", (user) => {
    ROOMS[userId] = [makeUser(user.name, user.figure)];
    socket.emit("roomCreated", userId);
    sendRoomUsers(userId);
  });

  socket.on("roomRemove", (roomId) => delete ROOMS[roomId]);

  socket.on("roomCheck", (roomId) => {
    if (!ROOMS[roomId]) {
      socket.emit("roomNotExists");
    } else if (ROOMS[roomId].length >= MAX_USER) {
      socket.emit("roomFull");
    }
  });

  socket.on("roomJoin", (roomId, user) => {
    const room = ROOMS[roomId];
    if (room && room.length < MAX_USER) {
      ROOMS[roomId].push(makeUser(user.name, user.figure));
      sendRoomUsers(roomId);
    } else {
      socket.emit("roomFull");
    }
  });

  socket.on("roomKick", (roomId, kickedUserId) => {
    const room = ROOMS[roomId];
    if (room) {
      const user = room.find((u) => u.id === kickedUserId);
      if (user) {
        user.socket.emit("roomKicked");
        ROOMS[roomId] = room.filter((u) => u.id !== kickedUserId);
        sendRoomUsers(roomId);
      }
    }
  });

  socket.on("roomStart", (roomId) => {
    const room = ROOMS[roomId];
    if (roomId === userId && room.length >= MIN_USER) {
      sendRoomStarted(roomId);

      Game(room);
    }
  });

  const disconnect = () => {
    Object.keys(ROOMS).forEach((roomId) => {
      ROOMS[roomId] = ROOMS[roomId].filter((p) => p.id !== userId);
      if (roomId === userId) {
        sendRoomNotExists(roomId);
      } else {
        sendRoomUsers(roomId);
      }
      if (ROOMS[roomId].length === 0) {
        delete ROOMS[roomId];
      }
    });
  };

  socket.on("roomLeave", disconnect);

  socket.on("disconnect", disconnect);
});

console.log("Server started!");

httpServer.listen(process.env.PORT || 80);
