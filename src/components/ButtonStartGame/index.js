import socket from "../../socket";
import Button from "../Button";
import {useTranslation} from "react-i18next";

const ButtonStartGame = () => {
  const { t } = useTranslation();
  return (
    <Button onClick={() => socket.emit("roomStart")}>
      {t('start game')}
    </Button>
  );
};

export default ButtonStartGame;
