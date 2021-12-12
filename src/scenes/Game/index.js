import GameBoard from "../../components/GameBoard";
import GameCard from "../../components/GameCard";
import GameHeader from "../../components/GameHeader";
import GameFooter from "../../components/GameFooter";
import GameOverlayCard from "../../components/GameOverlayCard";
import GameOverlayTreasure from "../../components/GameOverlayTreasure";
import GameOverlayDice from "../../components/GameOverlayDice";
import styles from "./index.module.css";
import GameTreasure from "../../components/GameTreasure";

const GameScene = ({ dice }) => {
  return (
    <div>
      <GameOverlayDice />
      <GameOverlayCard />
      <GameOverlayTreasure />
      <GameHeader />
      <div className={styles.game}>
        <GameBoard />
        <div className={styles.cards}>
          <GameCard />
          <GameTreasure />
        </div>
      </div>
      <GameFooter />
    </div>
  );
};

export default GameScene;
