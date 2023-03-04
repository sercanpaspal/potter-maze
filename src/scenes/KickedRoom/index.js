import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import {withTranslate} from "../../hocs/withTranslate";

const KickedRoomScreen = ({t}) => (
  <div>
    <h1>{t('you kicked from room')}</h1>
    <ButtonReturnMenu />
  </div>
);

export default withTranslate(KickedRoomScreen);
