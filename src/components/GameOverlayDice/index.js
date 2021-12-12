import React from "react";
import { connect } from "react-redux";
import GameOverlay from "../GameOverlay";
import styles from "./index.module.css";

const GameOverlayDice = ({ dice }) =>
  dice && (
    <GameOverlay>
      <h1 className={styles.dice}>{dice}</h1>
    </GameOverlay>
  );

const mapStateToProps = ({ game: { dice } }) => ({ dice });

export default connect(mapStateToProps)(GameOverlayDice);