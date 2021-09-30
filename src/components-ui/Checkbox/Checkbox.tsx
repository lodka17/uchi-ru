import React, { useRef } from "react";
import clsx from "clsx";

interface CheckboxProps {
  className?: string;
  isLeft?: boolean;
  title?: string;
  name?: string;
  onChange?: () => {};
  checked?: boolean;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = React.memo(
  ({ className, isLeft, title, name, onChange, checked, disabled }) => {
    const flag = checked ? "active" : "inactive";
    const id = `${Date.now()}-${name}`;
    const inputRef = useRef<HTMLInputElement>(null);
    const classes = clsx(
      "checkbox",
      className,
      { isLeft: isLeft },
      { isRight: !isLeft },
      { disabled: disabled },
    );

    const handleOnClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    return (
      <div className={classes}>
        {isLeft && <label htmlFor={id}>{title}</label>}
        <div className={`checkbox__box ${flag}`} onClick={handleOnClick}>
          <span></span>
          <input
            type="checkbox"
            checked={checked}
            ref={inputRef}
            onChange={onChange}
            name={name}
            id={id}
            disabled={disabled}
          />
        </div>
        {!isLeft && <label htmlFor={id}>{title}</label>}
      </div>
    );
  },
);
