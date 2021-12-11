import { connect } from "react-redux";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";

const ButtonReturnMenu = ({ changeScene }) => {
  return (
    <button onClick={() => changeScene(Scenes.MENU)}>return to the menu</button>
  );
};

const mapDispatchToProps = { changeScene };

export default connect(null, mapDispatchToProps)(ButtonReturnMenu);
