import styles from "./index.module.css";
import { withTranslation } from 'react-i18next';

const GameBoardColUsers = ({ t, users = [] }) => users.length > 0 && (
  <ul className={styles.users}>
    {users.map((user) => (
      <li title={user.name} key={`col-${user.id}`}>
        {t(user.figure)}
      </li>
    ))}
  </ul>
);

export default withTranslation()(GameBoardColUsers);
