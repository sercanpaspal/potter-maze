import {connect} from "react-redux";
import {useTranslation} from "react-i18next";

const GameHeader = ({game, user}) => {
  const {t} = useTranslation()
  const {turnUser} = game;

  const isYourTurn = turnUser.id === user.id;

  return <h1>{isYourTurn ? t("your turn") : `${t('turn')}: ${turnUser.name}`}</h1>;
};

const mapStateToProps = ({game, user}) => ({game, user});

export default connect(mapStateToProps)(GameHeader);
