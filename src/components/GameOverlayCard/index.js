import React from "react";
import { connect } from "react-redux";
import GameOverlay from "../GameOverlay";
import styles from "./index.module.css";

const GameOverlayCard = ({ card }) =>
  card && (
    <GameOverlay>
      <h1 className={styles.card}>{card.title}</h1>
    </GameOverlay>
  );

const mapStateToProps = ({ game: { card } }) => ({ card });

export default connect(mapStateToProps)(GameOverlayCard);
