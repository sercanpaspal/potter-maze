import { connect } from "react-redux";
import socket from "../../socket";
import Button from "../Button";
import {useTranslation} from "react-i18next";

const ButtonStartGame = ({ roomId }) => {
  const { t } = useTranslation();
  return (
    <Button onClick={() => socket.emit("roomStart", roomId)}>
      {t('start game')}
    </Button>
  );
};

const mapStateToProps = ({ room }) => ({ roomId: room.id });

export default connect(mapStateToProps)(ButtonStartGame);
