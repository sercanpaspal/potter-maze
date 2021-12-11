import { socket } from "../../App";

const GameButtonDice = () => {
  return <button onClick={() => socket.emit("gameDice")}>dice</button>;
};

export default GameButtonDice;
