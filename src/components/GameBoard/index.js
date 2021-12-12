import _ from "lodash";
import GameBoardCol from "../GameBoardCol";
import styles from "./index.module.css";

const GameBoard = () => (
  <div>
    <div className={styles.gameBoard}>
      {_.range(8).map((row) => (
        <div className={styles.gameBoardRow} key={`row-${row}`}>
          {_.range(8).map((col) => (
            <GameBoardCol row={row} col={col} key={`col-${row}-${col}`} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default GameBoard;
