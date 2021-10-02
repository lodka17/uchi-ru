import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import key from "weak-key";
import { MarginGroup } from "../MarginGroup";

import "./Input.scss";

export const Input = React.memo(({ title, className, hat, ...rest }) => {
  const classes = clsx("input", className, { "disabled": rest.disabled }, { hat });
  const id = key({ key: `input-${Date.now()}` });
  return (
    <label htmlFor={id} className={classes}>
      {title && <span className="input__title">{title}</span>}
      <MarginGroup isColumn>
        {hat && <span className="input__hat">{hat}</span>}
        <input id={id} {...rest} />
      </MarginGroup>
    </label>
  );
});

Input.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  hat: PropTypes.string,
};

Input.defaultProps = {
  title: "",
  className: "",
  hat: "",
};
