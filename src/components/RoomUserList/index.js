import { connect } from "react-redux";
import socket from "../../socket";
import Button from "../../components/Button";
import styles from "./index.module.css";
import {useTranslation} from "react-i18next";

const RoomUserList = ({ users, roomId, host = false }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.roomUserList}>
      <h2>{t('users')}</h2>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
        <tr>
          <th>{t('username')}</th>
          <th>{t('figure')}</th>
          {host && <th>*</th>}
        </tr>
        </thead>
        <tbody>
        {users.map((user, _i) => (
          <tr key={`user-${_i}`}>
            <td>{user.name}</td>
            <td>{t(user.figure)}</td>
            {host && (
              <td>
                {roomId !== user.id && (
                  <Button
                    small={true}
                    onClick={() => socket.emit("roomKick", roomId, user.id)}
                    style={{ margin: 0 }}
                  >
                    kick
                  </Button>
                )}
              </td>
            )}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = ({ room: { users } }) => ({ users });

export default connect(mapStateToProps)(RoomUserList);
