import { connect } from "react-redux";
import UserForm from "../../components/UserForm";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";

const JoinRoomScene = ({ changeScene }) => {
  return (
    <div>
      <h1>Join room</h1>
      <UserForm handleSubmit={() => changeScene(Scenes.WAIT_ROOM)}>
        <button type="submit">Join</button>
      </UserForm>
    </div>
  );
};

const mapDispatchToProps = { changeScene };

export default connect(null, mapDispatchToProps)(JoinRoomScene);
