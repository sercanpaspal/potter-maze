import RoomUserList from "../../components/RoomUserList";

const WaitRoomScene = ({ roomId }) => {
  return (
    <div>
      <h1>bekleme odası</h1>
      <RoomUserList roomId={roomId} />
    </div>
  );
};

export default WaitRoomScene;
