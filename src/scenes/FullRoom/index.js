import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import {withTranslate} from "../../hocs/withTranslate";

const FullRoomScreen = ({t}) => (
  <div>
    <h1>{t('room is full')}</h1>
    <ButtonReturnMenu />
  </div>
);

export default withTranslate(FullRoomScreen);
