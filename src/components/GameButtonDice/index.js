import { connect } from "react-redux";
import { socket } from "../../App";

const GameButtonDice = ({ dice }) =>
  !dice && <button onClick={() => socket.emit("gameDice")}>dice</button>;

const mapStateToProps = ({ game: { dice } }) => ({ dice });

export default connect(mapStateToProps)(GameButtonDice);
