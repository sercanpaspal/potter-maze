import ThemeList from "../ThemeList";
import GithubCorner from "react-github-corner";
import styles from "./index.module.css";
import Languages from "../Languages";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ThemeList />
      <Languages />
      {children}

      <GithubCorner
        href="https://github.com/sercanpaspal/potter-maze"
        bannerColor="var(--primary-500)"
        octoColor="var(--secondary-500)"
        size="80"
        direction="right"
      />
    </div>
  );
};

export default Layout;
