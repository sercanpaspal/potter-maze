import { connect } from "react-redux";
import { Themes } from "../../constants/enums";
import { changeTheme } from "../../store/actions";

const ThemeList = ({ changeTheme }) => {
  return (
    <ul>
      {Object.values(Themes).map((theme) => (
        <li key={theme}>
          <button onClick={() => changeTheme(theme)}>{theme}</button>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = { changeTheme };

export default connect(null, mapDispatchToProps)(ThemeList);
