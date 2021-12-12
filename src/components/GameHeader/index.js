import { connect } from "react-redux";

const GameHeader = ({ game, user }) => {
  const { turnUser } = game;

  const isYourTurn = turnUser.id === user.id;

  return <h1>{isYourTurn ? "Your Turn" : `${user.name}'s Turn`}</h1>;
};

const mapStateToProps = ({ game, user }) => ({ game, user });

export default connect(mapStateToProps)(GameHeader);
