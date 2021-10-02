import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export const Award = ({ image, name }) => (
  <div className={styles.award}>
    <img className={styles.img} src={image} alt="award" />
    <div className={styles.tooltip}>
      <p className={styles.tail}></p>
      <p className={styles.name}>{name}</p>
    </div>
  </div>
);

Award.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
