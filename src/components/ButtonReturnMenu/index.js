import { connect } from "react-redux";
import { Scenes } from "../../constants/enums";
import { setScene } from "../../store/slices/scene";
import Button from "../Button";

const ButtonReturnMenu = ({ setScene, ...props }) => {
  return (
    <Button onClick={() => setScene(Scenes.MENU)} {...props}>
      menüye dön
    </Button>
  );
};

const mapDispatchToProps = { setScene };

export default connect(null, mapDispatchToProps)(ButtonReturnMenu);
