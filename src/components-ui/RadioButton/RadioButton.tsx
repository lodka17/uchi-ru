import React from "react";
import clsx from "clsx";

interface RadioButtonProps {
  className?: string;
  text?: string;
  disabled?: boolean;
  name?: string;
  rest?: any;
  onChange?: () => {};
}

export const RadioButton: React.FC<RadioButtonProps> = React.memo(
  ({ className, text, disabled, name, onChange, ...rest }) => {
    const id = `${Date.now()}-${name}`;
    const classes = clsx("radio-button", className, { "disabled": disabled });

    return (
      <label className={classes} htmlFor={id}>
        <input type="radio" className="visually-hidden" id={id} {...rest} />
        <div className="radio-button-box">
          <span className="radio-button__circle"></span>
        </div>
        <span className="radio-button__text">{text}</span>
      </label>
    );
  },
);
