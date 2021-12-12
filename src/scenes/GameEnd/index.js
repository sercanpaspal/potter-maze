import { connect } from "react-redux";
import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import RoomUserList from "../../components/RoomUserList";

const GameEnd = ({ game, user }) => {
  const {
    winnerUser: { id, name, figure },
  } = game;

  return (
    <div>
      <h1>
        kazanan{" "}
        <u>
          {figure} {name} {id === user.id && "(sen)"}
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
