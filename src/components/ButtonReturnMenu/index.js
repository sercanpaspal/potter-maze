import { connect } from "react-redux";
import { Scenes } from "../../constants/enums";
import { setScene } from "../../store/slices/scene";
import Button from "../Button";
import {useTranslation} from "react-i18next";

const ButtonReturnMenu = ({ setScene, ...props }) => {
  const { t } = useTranslation()
  return (
    <Button onClick={() => setScene(Scenes.MENU)} {...props}>
      {t('back to menu')}
    </Button>
  );
};

const mapDispatchToProps = { setScene };

export default connect(null, mapDispatchToProps)(ButtonReturnMenu);
