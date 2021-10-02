import React from "react";
import logo from "../../assets/icons/Logo.svg";
import { Button } from "../../components-ui/Button/";
import { MarginGroup } from "../../components-ui/MarginGroup";
import styles from "./styles.module.scss";

export const StartingForm = () => (
  <div className={styles.container}>
    <img alt={"logo"} src={logo} className={styles.logo} />
    <p className={styles.welcome}>Добро пожаловать!</p>
    <p className={styles.text}>Войти как</p>
    <MarginGroup gap={48}>
      <Button className={styles.buttons}>Ученик</Button>
      <Button className={styles.buttons}>Учитель</Button>
    </MarginGroup>
  </div>
);
