import GameBoard from "../../components/GameBoard";
import GameOverlayCard from "../../components/GameOverlayCard";
import GameOverlayDice from "../../components/GameOverlayDice";

const GameScene = ({ dice }) => {
  return (
    <div>
      <GameOverlayDice />
      <GameOverlayCard />
      <GameBoard />
    </div>
  );
};

export default GameScene;
