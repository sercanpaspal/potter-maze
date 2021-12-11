import { useEffect } from "react";
import { connect } from "react-redux";
import { io } from "socket.io-client";
import ThemeList from "./components/ThemeList";
import Scene from "./scenes";
import {
  setUserId,
  setRoomId,
  setRoomUsers,
  setSceneGame,
  setSceneKickedRoom,
  setSceneNotExistsRoom,
  setGameState,
} from "./store/actions";

export const socket = io(process.env.REACT_APP_SOCKET_URI, {
  transports: ["websocket"],
});

socket.on("id", setUserId);

socket.on("roomCreated", setRoomId);

socket.on("roomUserState", setRoomUsers);

socket.on("roomNotExists", setSceneNotExistsRoom);

socket.on("roomKicked", setSceneKickedRoom);

socket.on("roomStarted", setSceneGame);

socket.on("gameState", setGameState);

const App = ({ scene, theme }) => {
  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  return (
    <div>
      <ThemeList />
      <Scene currentScene={scene} />
    </div>
  );
};

const mapStateToProps = ({ scene, theme }) => ({ scene, theme });

export default connect(mapStateToProps)(App);
