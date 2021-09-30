import React from "react";
import clsx from "clsx";

interface CheckboxGroupProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, children, className }) => {
  const classes = clsx("checkbox-group", className);
  return (
    <div className={classes}>
      <p className="checkbox-group__title">{title}</p>
      <div className="checkbox-group__content">{children}</div>
    </div>
  );
};
