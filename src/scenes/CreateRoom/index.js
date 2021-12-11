import { connect } from "react-redux";
import RoomUserList from "../../components/RoomUserList";
import ButtonStartGame from "../../components/ButtonStartGame";
import { getRoomUrl } from "../../utils";

const CreateRoomScene = ({ roomId }) => {
  const roomUrl = getRoomUrl(roomId);

  return roomId ? (
    <div>
      <h1>oda bağlantısını paylaş</h1>
      <a target="_blank" rel="noreferrer" href={roomUrl}>
        {roomUrl}
      </a>

      <RoomUserList roomId={roomId} host={true} />

      <ButtonStartGame />
    </div>
  ) : (
    "Room creating.."
  );
};

const mapStateToProps = ({ room }) => ({ room, roomId: room.id });

export default connect(mapStateToProps)(CreateRoomScene);
