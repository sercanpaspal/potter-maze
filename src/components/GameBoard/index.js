import _ from "lodash";
import { connect } from "react-redux";
import GameBoardCol from "../GameBoardCol";
import GameButtonDice from "../GameButtonDice";
import styles from "./index.module.css";

const GameBoard = ({ game, user }) => {
  const { turnUser } = game;

  const isYourTurn = turnUser.id === user.id;

  return (
    <div>
      <h1>{isYourTurn ? "Your Turn" : `${user.name}'s Turn`}</h1>

      {isYourTurn && <GameButtonDice />}
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
};

const mapStateToProps = ({ game, user }) => ({ game, user });

export default connect(mapStateToProps)(GameBoard);
