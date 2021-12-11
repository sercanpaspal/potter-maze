import { connect } from "react-redux";
import { socket } from "../../App";

const ButtonStartGame = ({ roomId }) => {
  return (
    <button onClick={() => socket.emit("roomStart", roomId)}>start game</button>
  );
};

const mapStateToProps = ({ room }) => ({ roomId: room.id });

export default connect(mapStateToProps)(ButtonStartGame);
