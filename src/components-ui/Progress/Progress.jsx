import PropTypes from "prop-types";
import React from "react";

import "./styles.scss";
export const Progress = ({ procent, level }) => (
  <div className="progress-bar stripes animated reverse slower">
    <span className="progress-bar-inner" style={{ width: procent }}></span>
    <span className="progress-bar-level">{level}</span>
  </div>
);

Progress.propTypes = {
  procent: PropTypes.string,
  level: PropTypes.string,
};
