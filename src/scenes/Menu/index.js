import { connect } from "react-redux";
import UserForm from "../../components/UserForm";
import Button from "../../components/Button";
import { Scenes } from "../../constants/enums";
import { setScene } from "../../store/slices/scene";

const MenuScene = ({ setScene }) => {
  return (
    <div>
      <h1>potter maze</h1>
      <UserForm handleSubmit={() => setScene(Scenes.CREATE_ROOM)}>
        <Button type="submit">oda oluştur</Button>
      </UserForm>
    </div>
  );
};

const mapDispatchToProps = { setScene };

export default connect(null, mapDispatchToProps)(MenuScene);
