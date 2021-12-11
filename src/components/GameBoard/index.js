import _ from "lodash";
import { connect } from "react-redux";
import GameBoardCol from "../GameBoardCol";
import GameButtonDice from "../GameButtonDice";

const GameBoard = ({ game, user }) => {
  const { turnUser } = game;

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
                <GameBoardCol row={row} col={col} key={`col-${row}-${col}`} />
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
