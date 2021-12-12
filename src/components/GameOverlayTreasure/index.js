import { connect } from "react-redux";
import GameOverlay from "../GameOverlay";
import GameTreasure from "../GameTreasure";

const GameOverlayTreasure = ({ treasure }) =>
  treasure && (
    <GameOverlay>
      <GameTreasure />
    </GameOverlay>
  );

const mapStateToProps = ({ game: { treasure } }) => ({ treasure });

export default connect(mapStateToProps)(GameOverlayTreasure);
