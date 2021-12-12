import GameBoard from "../../components/GameBoard";
import GameCard from "../../components/GameCard";
import GameHeader from "../../components/GameHeader";
import GameFooter from "../../components/GameFooter";
import styles from "./index.module.css";
import GameTreasure from "../../components/GameTreasure";
import GameOverlayInfo from "../../components/GameOverlayInfo";

const GameScene = () => {
  return (
    <div>
      <GameOverlayInfo />
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
