import {connect} from "react-redux";
import socket from "../../socket";
import Button from "../Button";
import {useTranslation} from "react-i18next";

const GameButtonDice = ({dice}) => {
  const {t} = useTranslation();

  return !dice && <Button onClick={() => socket.emit("gameDice")}>{t('dice')}</Button>
}

const mapStateToProps = ({game: {dice}}) => ({dice});

export default connect(mapStateToProps)(GameButtonDice);
