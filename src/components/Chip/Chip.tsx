import React, { HTMLAttributes, forwardRef } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string;
  color?: "primary";
  size?: "small" | "large" | "medium";
}

const Chip = forwardRef<HTMLDivElement, Props>(
  (
    { header, color = "primary", size = "small", ...props },
    ref
  ) => {
    const rootClassName = cn(`${s.root}`, {
      [s.large]: size === "large",
      [s.medium]: size === "medium",
      [s.small]: size === "small",
      [s.primary]: color === "primary",
    });

    return (
      <div ref={ref} {...props} className={rootClassName}>
        <p>{header}</p>
      </div>
    );
  }
);

export default Chip;
