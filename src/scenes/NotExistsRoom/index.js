import ButtonReturnMenu from "../../components/ButtonReturnMenu";
import {withTranslate} from "../../hocs/withTranslate";

const NotExistsRoom = ({ t }) => (
  <div>
    <h1>{t('room not exists')}</h1>
    <ButtonReturnMenu />
  </div>
)

export default withTranslate(NotExistsRoom);
