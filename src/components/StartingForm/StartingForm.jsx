import React from "react";
import logo from "../../assets/icons/Logo.svg";
import { Button } from "../../components-ui/Button/";
import styles from "./styles.module.scss";

export const StartingForm = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <img alt={"logo"} src={logo} className={styles.logo} />
      <p className={styles.text}>Добро пожаловать!</p>
      <div className={styles.ButtonGroup}>
        <Button className={styles.buttons} />
        <Button className={styles.buttons} />
      </div>
    </div>
  </div>
);
