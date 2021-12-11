import { connect } from "react-redux";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";

const ButtonStartGame = ({ changeScene }) => {
  return <button onClick={() => changeScene(Scenes.GAME)}>start game</button>;
};

const mapDispatchToProps = { changeScene };

export default connect(null, mapDispatchToProps)(ButtonStartGame);
