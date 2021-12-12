import styles from "./index.module.css";

const GameBoardColUsers = ({ users }) => (
  <ul className={styles.users}>
    {users.map((user) => (
      <li>
        {user.name.charAt(0)}. {user.figure}
      </li>
    ))}
  </ul>
);

export default GameBoardColUsers;
