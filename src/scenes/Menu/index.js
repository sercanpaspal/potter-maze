import { connect } from "react-redux";
import UserForm from "../../components/UserForm";
import Button from "../../components/Button";
import { Scenes } from "../../constants/enums";
import { changeScene } from "../../store/actions";

const MenuScene = ({ changeScene }) => {
  return (
    <div>
      <h1>potter maze</h1>
      <UserForm handleSubmit={() => changeScene(Scenes.CREATE_ROOM)}>
        <Button type="submit">oda oluştur</Button>
      </UserForm>
    </div>
  );
};

const mapDispatchToProps = { changeScene };

export default connect(null, mapDispatchToProps)(MenuScene);
