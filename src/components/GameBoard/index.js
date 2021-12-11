import _ from "lodash";
import { connect } from "react-redux";
import GameButtonDice from "../GameButtonDice";

const GameBoard = ({ game, user }) => {
  const { board, turnUser } = game;

  const findBoardPieceType = (x, y) =>
    board.find((p) => p.coord[0] === x && p.coord[1] === y)?.type;

  const isYourTurn = turnUser.id === user.id;

  return (
    <div>
      <h1>{isYourTurn ? "Your Turn" : `${user.name}'s Turn`}</h1>

      {isYourTurn && <GameButtonDice />}
      <table border="1">
        <tbody>
          {_.range(8).map((row) => (
            <tr key={`row-${row}`}>
              {_.range(8).map((col) => (
                <td key={`col-${row}-${col}`}>
                  {row} - {col}
                  {findBoardPieceType(row, col)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ game, user }) => ({ game, user });

export default connect(mapStateToProps)(GameBoard);
