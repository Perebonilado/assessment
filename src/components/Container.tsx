import React, { FC, PropsWithChildren, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <div
      className={`w-full max-w-screen-xl mx-auto px-4 ${props.className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
