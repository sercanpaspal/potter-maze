import styles from "./index.module.css";

const GameBoardColUsers = ({ users }) => (
  <ul className={styles.users}>
    {users.map((user) => (
      <li title={user.name} key={`col-${user.id}`}>
        {user.figure}
      </li>
    ))}
  </ul>
);

export default GameBoardColUsers;
