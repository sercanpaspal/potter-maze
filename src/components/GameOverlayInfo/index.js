import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { connect } from "react-redux";
import GameCard from "../GameCard";
import GameTreasure from "../GameTreasure";

const GameOverlayInfo = ({ infos }) => {
  const [opened, setOpened] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setHide(false);
    setOpened(false);
    const timeout = setTimeout(() => setOpened(true), 100);

    return () => clearTimeout(timeout);
  }, [infos]);

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

  if (infos.length === 0) return "";

  const info = infos[infos.length - 1];

  let content = "";

  switch (info.type) {
    case "dice":
      content = <h1>{info.payload}</h1>;
      break;
    case "card":
      content = <GameCard />;
      break;
    case "treasure":
      content = <GameTreasure />;
      break;
    default:
      break;
  }

  return (
    !hide && (
      <div
        onClick={() => setOpened(false)}
        className={cn([styles.overlay, { [styles.opened]: opened }])}
      >
        {content}
      </div>
    )
  );
};

const mapStateToProps = ({ game: { infos } }) => ({ infos });

export default connect(mapStateToProps)(GameOverlayInfo);
