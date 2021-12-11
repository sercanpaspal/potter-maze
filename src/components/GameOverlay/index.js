import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import cn from "classnames";

const GameOverlay = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setOpened(true), 1);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setOpened(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!opened) {
      const timeout = setTimeout(() => setHide(true), 800);

      return () => clearTimeout(timeout);
    }
  }, [opened]);

  return (
    !hide && (
      <div
        onClick={() => setOpened(false)}
        className={cn([styles.overlay, { [styles.opened]: opened }])}
      >
        {children}
      </div>
    )
  );
};

export default GameOverlay;
