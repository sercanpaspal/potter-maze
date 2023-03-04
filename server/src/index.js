const express = require("express");
const http = require("http");
const path = require("path");
const Server = require("socket.io").Server;
const dotenv = require("dotenv");
const Game = require("./game");
const SocketGame = require('socket-game');
dotenv.config();

const clientBuildPath = path.join(__dirname, "../../", "build");

const app = express();

app.use(express.static(clientBuildPath));

app.get("/", function (_, res) {
  res.sendFile(clientBuildPath);
});

const httpServer = http.createServer(app);

const io = new Server(httpServer);

const onRoomStart = room => Game(room);

const onUserCreate = ({ name, figure }) => ({
  name,
  figure,
  position: 0,
  waitTurn: 0,
  felix: false,
  protections: [],
})

SocketGame(io, {
  onRoomStart,
  onUserCreate
});


console.log("Server started!");

httpServer.listen(process.env.PORT || 80);
