import { useEffect } from "react";
import { connect } from "react-redux";
import { Themes } from "../../constants/enums";
import { changeTheme } from "../../store/actions";
import styles from "./index.module.css";

const ThemeList = ({ theme, changeTheme }) => {
  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  return (
    <ul className={styles.themeList}>
      {Object.values(Themes).map((theme) => (
        <li key={theme}>
          <button onClick={() => changeTheme(theme)}>{theme}</button>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = { changeTheme };

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, mapDispatchToProps)(ThemeList);
