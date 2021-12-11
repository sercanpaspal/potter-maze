import { useEffect } from "react";
import { connect } from "react-redux";
import { socket } from "../../App";
import Button from "../../components/Button";
import UserForm from "../../components/UserForm";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";

const JoinRoomScene = ({ roomId, changeScene }) => {
  useEffect(() => {
    socket.emit("roomExistsCheck", roomId);
  }, [roomId]);

  return (
    <div>
      <h1>odaya katıl</h1>
      <UserForm handleSubmit={() => changeScene(Scenes.WAIT_ROOM)}>
        <Button type="submit">katıl</Button>
      </UserForm>
    </div>
  );
};

const mapStateToProps = ({ room }) => ({ roomId: room.id });

const mapDispatchToProps = { changeScene };

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoomScene);
