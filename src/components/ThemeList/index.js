import { useEffect } from "react";
import { connect } from "react-redux";
import { Themes } from "../../constants/enums";
import { setTheme } from "../../store/slices/theme";
import cn from "classnames";
import styles from "./index.module.css";

const ThemeList = ({ theme, setTheme }) => {
  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  return (
    <ul className={styles.themeList}>
      {Object.values(Themes).map(({ key, primaryColor, secondaryColor }) => (
        <li key={key} className={cn([{ [styles.active]: theme === key }])}>
          <button onClick={() => setTheme(key)}>
            <div style={{ background: primaryColor }}></div>
            <div style={{ background: secondaryColor }}></div>
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = { setTheme };

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps, mapDispatchToProps)(ThemeList);
