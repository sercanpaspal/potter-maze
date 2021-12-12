import ThemeList from "../ThemeList";
import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ThemeList />
      {children}
    </div>
  );
};

export default Layout;
