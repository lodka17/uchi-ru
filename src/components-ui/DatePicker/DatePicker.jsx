import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import DatePicker from "react-date-picker";

import "./DatePicker.scss";

export const InputDate = ({ style, title, value, name, onChange, className, ...rest }) => {
  const classes = clsx("input-date", className);

  const handleOnChange = useCallback(
    (value) => {
      onChange({ name, value });
    },
    [onChange, name],
  );

  return (
    <div style={style} className={classes}>
      <p>{title}</p>
      <DatePicker value={value} onChange={handleOnChange} {...rest} format="dd-MM-yyyy" />
    </div>
  );
};

InputDate.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.instanceOf(Date),
};
