import { connect } from "react-redux";
import styles from "./index.module.css";
import cn from "classnames";
import GameBoardColUsers from "../GameBoardColUsers";

const GameBoardCol = ({ row, col, game }) => {
  const { board, users } = game;

  const findByCoord = (p) => p.coord[0] === row && p.coord[1] === col;

  const pieceType = board.find(findByCoord)?.type;

  const findIndex = board.findIndex(findByCoord);

  const colUsers = users.filter((u) => u.position === findIndex);

  return (
    <div className={cn([styles.gameBoardCol, { [styles.path]: !!pieceType }])}>
      {findIndex > -1 && (
        <div className={styles.colNumber}>{findIndex + 1}</div>
      )}
      {pieceType !== "road" && (
        <div className={cn([styles.special, styles[pieceType]])}></div>
      )}
      <GameBoardColUsers users={colUsers} />
    </div>
  );
};

const mapStateToProps = ({ game }) => ({
  game,
});

export default connect(mapStateToProps)(GameBoardCol);
