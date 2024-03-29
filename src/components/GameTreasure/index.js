import { connect } from "react-redux";
import styles from "./index.module.css";
import {useTranslation} from "react-i18next";

const GameTreasure = ({ treasure }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.treasure}>
      {treasure ? (
        <div className={styles[treasure.key]}>
          <h2>{treasure.title}</h2>
          <p>{treasure.description}</p>
        </div>
      ) : (
        <h2>{t('treasures')}</h2>
      )}
    </div>
  );
}
const mapStateToProps = ({ game: { treasure } }) => ({ treasure });

export default connect(mapStateToProps)(GameTreasure);
