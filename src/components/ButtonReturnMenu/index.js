import { connect } from "react-redux";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";
import Button from "../Button";

const ButtonReturnMenu = ({ changeScene, ...props }) => {
  return (
    <Button onClick={() => changeScene(Scenes.MENU)} {...props}>
      return to the menu
    </Button>
  );
};

const mapDispatchToProps = { changeScene };

export default connect(null, mapDispatchToProps)(ButtonReturnMenu);
