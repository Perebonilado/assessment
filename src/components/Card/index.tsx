import React, { HTMLAttributes, PropsWithChildren, forwardRef } from "react";
import s from "./styles.module.css";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "outlined" | "solid";
}

const Card = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, variant = "outlined", ...props }, ref) => {
    const rootClassName = cn(`rounded-xl py-5 px-8`, {
      [s.outlined]: variant === "outlined",
      [s.solid]: variant === "solid",
    });

    return (
      <div ref={ref} className={`${rootClassName}`} {...props}>
        {children}
      </div>
    );
  }
);

export default Card;
