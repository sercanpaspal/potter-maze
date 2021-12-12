import { connect } from "react-redux";
import { io } from "socket.io-client";
import Layout from "./components/Layout";
import Scene from "./scenes";
import {
  setUserId,
  setRoomId,
  setRoomUsers,
  setSceneGame,
  setSceneKickedRoom,
  setSceneNotExistsRoom,
  setGameState,
  setGameWinner,
} from "./store/actions";
import { socketUrl } from "./utils";

export const socket = io(socketUrl, {
  transports: ["websocket"],
});

socket.on("id", setUserId);

socket.on("roomCreated", setRoomId);

socket.on("roomUserState", setRoomUsers);

socket.on("roomNotExists", setSceneNotExistsRoom);

socket.on("roomKicked", setSceneKickedRoom);

socket.on("roomStarted", setSceneGame);

socket.on("gameState", setGameState);

socket.on("gameWinner", setGameWinner);

const App = ({ scene }) => (
  <Layout>
    <Scene currentScene={scene} />
  </Layout>
);

const mapStateToProps = ({ scene }) => ({ scene });

export default connect(mapStateToProps)(App);
