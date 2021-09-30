import React from "react";
import clsx from "clsx";
import { Styled } from "./Button.styled";

interface ButtonProps {
  className?: string;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ className, children, disabled, ...rest }) => {
    const classes = clsx("button", className, { "disabled": disabled });
    return (
      <Styled.Button className={classes} disabled={disabled} {...rest}>
        {children}
      </Styled.Button>
    );
  },
);
