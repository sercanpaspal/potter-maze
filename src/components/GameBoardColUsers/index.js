import styles from "./index.module.css";

const GameBoardColUsers = ({ users = [] }) => users.length > 0 && (
  <ul className={styles.users}>
    {users.map((user) => (
      <li title={user.name} key={`col-${user.id}`}>
        {user.figure}
      </li>
    ))}
  </ul>
);

export default GameBoardColUsers;
