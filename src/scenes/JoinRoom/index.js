import { useEffect } from "react";
import { connect } from "react-redux";
import socket from "../../socket";
import Button from "../../components/Button";
import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import UserForm from "../../components/UserForm";
import { Scenes } from "../../constants/enums";
import { setScene } from "../../store/slices/scene";
import styles from "./index.module.css";
import {withTranslate} from "../../hocs/withTranslate";

const JoinRoomScene = ({ roomId, setScene, t }) => {
  useEffect(() => {
    socket.emit("roomCheck", roomId);
  }, [roomId]);

  return (
    <div className={styles.joinRoom}>
      <h1>{t('join to room')}</h1>
      <UserForm handleSubmit={() => setScene(Scenes.WAIT_ROOM)}>
        <Button type="submit">{t('join')}</Button>
      </UserForm>

      <ButtonReturnMenu />
    </div>
  );
};

const mapStateToProps = ({ room }) => ({ roomId: room.id });

const mapDispatchToProps = { setScene };

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(JoinRoomScene));
