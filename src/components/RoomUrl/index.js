import styles from "./index.module.css";
import { getRoomUrl } from "../../utils";
import Button from "../Button";
import { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";

const RoomUrl = ({ roomId }) => {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false);
  const roomUrl = getRoomUrl(roomId);

  const copy = () => {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = roomUrl;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setCopied(true);
  };

  useEffect(() => {
    let timeout;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className={styles.roomUrl}>
      <a target="_blank" rel="noreferrer" href={roomUrl}>
        {roomUrl}
      </a>
      <Button small={true} onClick={() => copy()}>
        {copied ? t('copied') : t('copy')}
      </Button>
    </div>
  );
};

export default RoomUrl;
