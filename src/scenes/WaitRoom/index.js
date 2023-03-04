import RoomUserList from "../../components/RoomUserList";
import {withTranslate} from "../../hocs/withTranslate";

const WaitRoomScene = ({ roomId, t }) => {
  return (
    <div>
      <h1>{t('waiting room')}</h1>
      <RoomUserList roomId={roomId} />
    </div>
  );
};


export default withTranslate(WaitRoomScene);
