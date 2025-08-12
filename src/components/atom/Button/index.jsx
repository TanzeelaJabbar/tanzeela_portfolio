import React from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export default function Button({
  label,
  variant = "orange",
  leftIcon,
  rightIcon,
  onClick,
}) {
  return (
    <button
      className={clsx(styles.base, styles[variant])}
      onClick={onClick}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {label}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}
