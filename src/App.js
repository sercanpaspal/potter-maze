import { io } from "socket.io-client";

export const socket = io(process.env.REACT_APP_SOCKET_URI, {
  transports: ["websocket"],
});

const App = () => {
  return <div className="App">hello</div>;
};

export default App;
