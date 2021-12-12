import { connect } from "react-redux";
import GameCard from "../GameCard";
import GameOverlay from "../GameOverlay";

const GameOverlayCard = ({ card }) =>
  card && (
    <GameOverlay>
      <GameCard />
    </GameOverlay>
  );

const mapStateToProps = ({ game: { card } }) => ({ card });

export default connect(mapStateToProps)(GameOverlayCard);
