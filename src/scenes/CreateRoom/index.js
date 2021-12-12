import { connect } from "react-redux";
import RoomUserList from "../../components/RoomUserList";
import ButtonStartGame from "../../components/ButtonStartGame";
import { getRoomUrl } from "../../utils";
import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import styles from "./index.module.css";

const CreateRoomScene = ({ roomId }) => {
  const roomUrl = getRoomUrl(roomId);

  return roomId ? (
    <div className={styles.createRoom}>
      <h1>oda bağlantısını paylaş</h1>
      <a target="_blank" rel="noreferrer" href={roomUrl}>
        {roomUrl}
      </a>

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
