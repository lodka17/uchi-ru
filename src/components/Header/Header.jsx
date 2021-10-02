import React from "react";
import key from "weak-key";
import styles from "./styles.module.scss";

const navLeft = [
  {
    name: "Личный кабинет",
    link: "",
  },
  {
    name: "Форма постановки вопроса",
    link: "",
  },
  {
    name: "Выбрать предмет",
    link: "",
  },
  {
    name: "Архив",
    link: "",
  },
];

const NavRight = [
  {
    name: "Чат",
    link: "",
  },
  {
    name: "Помощь",
    link: "",
  },
];

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.flex}>
        <nav>
          <ul className={styles.list}>
            {navLeft.map((el) => (
              <li className={styles.left} key={key(el)}>
                <a href={el.link}>{el.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className={styles.list}>
            {NavRight.map((el) => (
              <li className={styles.right} key={key(el)}>
                <a href={el.link}>{el.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
