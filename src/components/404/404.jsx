import React from "react";
import errorPage from "../../assets/images/errorPage.svg";
import { Button } from "../../components-ui/Button";
import styles from "./styles.module.scss";

export const ErrorPage = () => {
  // eslint-disable-next-line no-unused-vars
  const text = "1";
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.errorPage} src={errorPage} />
        <p className={styles.oops}>Ой, что-то пошло не так</p>
        <p className={styles.text}>Страница не найдена</p>
        <Button className={styles.button}>Вернутся на главную страницу</Button>
      </div>
    </div>
  );
};
