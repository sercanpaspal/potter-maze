import React from "react";
import styles from "./index.module.css";
import cn from "classnames";

const Button = ({ children, small = false, ...props }) => (
  <button {...props} className={cn([styles.button, { [styles.small]: small }])}>
    {children}
  </button>
);

export default Button;
