import { connect } from "react-redux";
import { socket } from "../../App";
import Button from "../../components/Button";
import styles from "./index.module.css";

const RoomUserList = ({ users, roomId, host = false }) => (
  <div className={styles.roomUserList}>
    <h2>kullanıcılar</h2>
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th>kullanıcı adı</th>
          <th>figür</th>
          {host && <th>*</th>}
        </tr>
      </thead>
      <tbody>
        {users.map((user, _i) => (
          <tr key={`user-${_i}`}>
            <td>{user.name}</td>
            <td>{user.figure}</td>
            {host && (
              <td>
                {roomId !== user.id && (
                  <Button
                    small={true}
                    onClick={() => socket.emit("roomKick", roomId, user.id)}
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

const mapStateToProps = ({ room: { users } }) => ({ users });

export default connect(mapStateToProps)(RoomUserList);
