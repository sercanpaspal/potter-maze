import { connect } from "react-redux";
import RoomUserList from "../../components/RoomUserList";
import ButtonStartGame from "../../components/ButtonStartGame";
import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import styles from "./index.module.css";
import RoomUrl from "../../components/RoomUrl";

const CreateRoomScene = ({ roomId }) => {
  return roomId ? (
    <div className={styles.createRoom}>
      <h1>oda bağlantısını paylaş</h1>

      <RoomUrl roomId={roomId} />

      <RoomUserList roomId={roomId} host={true} />

      <ButtonStartGame />

      <ButtonReturnMenu />
    </div>
  ) : (
    "Room creating.."
  );
};

const mapStateToProps = ({ room }) => ({ room, roomId: room.id });

export default connect(mapStateToProps)(CreateRoomScene);
