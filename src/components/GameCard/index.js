import { connect } from "react-redux";
import styles from "./index.module.css";

const GameCard = ({ card }) => (
  <div className={styles.card}>
    {card ? (
      <div className={styles[card.key]}>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    ) : (
      <h2>kartlar</h2>
    )}
  </div>
);
const mapStateToProps = ({ game: { card } }) => ({ card });

export default connect(mapStateToProps)(GameCard);
