import { connect } from "react-redux";
import { socket } from "../../App";
import Button from "../Button";

const ButtonStartGame = ({ roomId }) => {
  return (
    <Button onClick={() => socket.emit("roomStart", roomId)}>
      oyunu başlat
    </Button>
  );
};

const mapStateToProps = ({ room }) => ({ roomId: room.id });

export default connect(mapStateToProps)(ButtonStartGame);
