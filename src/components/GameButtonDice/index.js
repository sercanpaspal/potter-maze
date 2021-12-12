import { connect } from "react-redux";
import { socket } from "../../App";
import Button from "../Button";

const GameButtonDice = ({ dice }) =>
  !dice && <Button onClick={() => socket.emit("gameDice")}>zar at</Button>;

const mapStateToProps = ({ game: { dice } }) => ({ dice });

export default connect(mapStateToProps)(GameButtonDice);
