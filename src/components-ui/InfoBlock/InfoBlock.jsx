import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

export const InfoBlock = ({ img, title, value }) => (
  <div className={styles.infoBlock}>
    <div className={styles.imgWrapper}>
      <img src={img} alt="piece" />
    </div>
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}> {value}</p>
    </div>
  </div>
);

InfoBlock.propTypes = {
  img: PropTypes.node,
  title: PropTypes.string,
  value: PropTypes.string,
};
