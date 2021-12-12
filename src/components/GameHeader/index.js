import { connect } from "react-redux";

const GameHeader = ({ game, user }) => {
  const { turnUser } = game;

  const isYourTurn = turnUser.id === user.id;

  return <h1>{isYourTurn ? "senin sıran" : `sıra: ${turnUser.name}`}</h1>;
};

const mapStateToProps = ({ game, user }) => ({ game, user });

export default connect(mapStateToProps)(GameHeader);
