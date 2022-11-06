import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

const Button = ({ children, small = false, active = false, ...props }) => (
  <button {...props} className={cn([styles.button, { [styles.small]: small, [styles.active]: active }])}>
    {children}
  </button>
);

export default Button;
