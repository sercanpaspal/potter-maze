import { connect } from "react-redux";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";

const MenuScene = ({ changeScene }) => {
  return (
    <div>
      Hello this is menu scene{" "}
      <button onClick={() => changeScene(Scenes.CREATE_ROOM)}>
        create room
      </button>
    </div>
  );
};

const mapDispatchToProps = { changeScene };

export default connect(null, mapDispatchToProps)(MenuScene);
