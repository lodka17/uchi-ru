import React from "react";
import clsx from "clsx";
import { Styled } from "./Input.styled";

interface InputProps {
  title?: string;
  className?: string;
  id?: string;
  color?: string;
  background?: string;
  disabled?: boolean;
  rest?: any;
}

export const Input: React.FC<InputProps> = React.memo(({ title, className, id, ...rest }) => {
  const disabled = rest.disabled;
  const classes = clsx("input", className, { "disabled": disabled });

  return (
    <Styled.Label htmlFor={id} className={classes}>
      <Styled.Span>{title}</Styled.Span>
      <Styled.Input id={id} {...rest} />
    </Styled.Label>
  );
});

Input.defaultProps = {
  title: "",
  className: "",
  id: "",
};
