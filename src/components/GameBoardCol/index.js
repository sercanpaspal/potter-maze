import { connect } from "react-redux";

const GameBoardCol = ({ row, col, game }) => {
  const { board, users } = game;

  const findByCoord = (p) => p.coord[0] === row && p.coord[1] === col;

  const pieceType = board.find(findByCoord)?.type;

  const findIndex = board.findIndex(findByCoord);

  const colUsers = users.filter((u) => u.position === findIndex);

  return (
    <td>
      {row} - {col}
      {pieceType}
      <ul>
        {colUsers.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </td>
  );
};

const mapStateToProps = ({ game }) => ({
  game,
});

export default connect(mapStateToProps)(GameBoardCol);
