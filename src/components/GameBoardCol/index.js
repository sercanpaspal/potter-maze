import { connect } from "react-redux";
import styles from "./index.module.css";
import cn from "classnames";

const GameBoardCol = ({ row, col, game }) => {
  const { board, users } = game;

  const findByCoord = (p) => p.coord[0] === row && p.coord[1] === col;

  const pieceType = board.find(findByCoord)?.type;

  const findIndex = board.findIndex(findByCoord);

  const colUsers = users.filter((u) => u.position === findIndex);

  return (
    <div
      className={cn([
        styles.gameBoardCol,
        { [styles.path]: !!pieceType },
        styles[pieceType],
      ])}
    >
      <ul>
        {colUsers.map((user) => (
          <li>{user.figure}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ game }) => ({
  game,
});

export default connect(mapStateToProps)(GameBoardCol);
