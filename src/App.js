import { connect } from "react-redux";
import { io } from "socket.io-client";
import Scene from "./scenes";

export const socket = io(process.env.REACT_APP_SOCKET_URI, {
  transports: ["websocket"],
});

const App = ({ scene }) => {
  return <Scene currentScene={scene} />;
};

const mapStateToProps = ({ scene }) => ({ scene });

export default connect(mapStateToProps)(App);
