import { connect } from "react-redux";
import ButtonReturnMenu from "../ButtonReturnMenu";
import GameButtonDice from "../GameButtonDice";
import styles from "./index.module.css";

const GameFooter = ({ game, user }) => {
  const { turnUser } = game;

  const isYourTurn = turnUser.id === user.id;

  return (
    <div className={styles.footer}>
      {isYourTurn && <GameButtonDice />}
      <ButtonReturnMenu style={{ marginLeft: "auto" }} />
    </div>
  );
};

const mapStateToProps = ({ game, user }) => ({ game, user });

export default connect(mapStateToProps)(GameFooter);
