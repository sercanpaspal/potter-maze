import { connect } from "react-redux";
import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import RoomUserList from "../../components/RoomUserList";
import styles from "./index.module.css";
import cn from "classnames";

const GameEnd = ({ game, user }) => {
  const { winnerUser } = game;

  const isWinner = winnerUser?.id === user.id;

  return (
    <div>
      <div className={cn([styles.bg, { [styles.winner]: isWinner }])}></div>
      <h1>
        kazanan{" "}
        <u>
          {winnerUser?.figure} {winnerUser?.name} {isWinner && "(sen)"}
        </u>
        !
      </h1>
      <RoomUserList />

      <ButtonReturnMenu />
    </div>
  );
};

const mapStateToProps = ({ game, user }) => ({ game, user });

export default connect(mapStateToProps)(GameEnd);
