import { connect } from "react-redux";
import UserForm from "../../components/user-form";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";

const MenuScene = ({ changeScene }) => {
  return (
    <div>
      <UserForm handleSubmit={() => changeScene(Scenes.CREATE_ROOM)}>
        <button type="submit">create room</button>
      </UserForm>
      Hello this is menu scene{" "}
    </div>
  );
};

const mapDispatchToProps = { changeScene };

export default connect(null, mapDispatchToProps)(MenuScene);
