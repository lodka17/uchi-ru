import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";
import { Input } from "antd";

export const InfoBlock = ({ img, title, value, isEdit, ...rest }) => (
  <div className={styles.infoBlock}>
    <div className={styles.imgWrapper}>
      <img src={img} alt="piece" />
    </div>
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {!isEdit && <p className={styles.value}> {value}</p>}
      {isEdit && <Input {...rest} />}
    </div>
  </div>
);

InfoBlock.propTypes = {
  img: PropTypes.node,
  title: PropTypes.string,
  value: PropTypes.string,
  isEdit: PropTypes.bool,
};
