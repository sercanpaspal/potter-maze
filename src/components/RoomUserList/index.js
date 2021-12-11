import { connect } from "react-redux";
import { socket } from "../../App";

const RoomUserList = ({ users, roomId, host = false }) => (
  <div>
    <h1>Users</h1>
    <ul>
      {users.map((user, _i) => (
        <li key={`user-${_i}`}>
          {user.name} - {user.figure}
          {host && roomId !== user.id && (
            <button onClick={() => socket.emit("roomKick", roomId, user.id)}>
              kick
            </button>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ room: { users } }) => ({ users });

export default connect(mapStateToProps)(RoomUserList);
