import GameBoard from "../../components/GameBoard";
import GameOverlayDice from "../../components/GameOverlayDice";

const GameScene = () => {
  return (
    <div>
      <GameOverlayDice />
      <GameBoard />
    </div>
  );
};

export default GameScene;
