import { connect } from "react-redux";
import { socket } from "../../App";
import Button from "../Button";

const ButtonStartGame = ({ roomId }) => {
  return (
    <Button onClick={() => socket.emit("roomStart", roomId)}>start game</Button>
  );
};

const mapStateToProps = ({ room }) => ({ roomId: room.id });

export default connect(mapStateToProps)(ButtonStartGame);
