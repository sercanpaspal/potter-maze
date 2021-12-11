import { connect } from "react-redux";
import { io } from "socket.io-client";
import Scene from "./scenes";
import {
  setRoomId,
  setRoomUsers,
  setSceneKickedRoom,
  setSceneNotExistsRoom,
} from "./store/actions";

export const socket = io(process.env.REACT_APP_SOCKET_URI, {
  transports: ["websocket"],
});

socket.on("roomCreated", setRoomId);

socket.on("roomUserState", setRoomUsers);

socket.on("roomNotExists", setSceneNotExistsRoom);

socket.on("roomKicked", setSceneKickedRoom);

const App = ({ scene }) => {
  return <Scene currentScene={scene} />;
};

const mapStateToProps = ({ scene }) => ({ scene });

export default connect(mapStateToProps)(App);
