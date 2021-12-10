const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log(socket);
});

console.log("Server started!");

httpServer.listen(process.env.PORT || 3000);
