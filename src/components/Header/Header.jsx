import PropTypes from "prop-types";
import React from "react";
import key from "weak-key";
import bellSvg from "./images/bell.svg";
import headephoneSvg from "./images/headphone.svg";
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
    title: "Чат",
    name: "chat",
    link: "headephoneSvg",
    svg: headephoneSvg,
  },
  {
    title: "Помощь",
    name: "help",
    link: "",
    svg: bellSvg,
  },
];

export const Header = ({ showMark }) => (
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
                <a href={el.link}>{el.title}</a>
                <div className={styles.icon}>
                  {showMark && el.name === "help" && <span className={styles.mark}></span>}
                  <img src={el.svg} />
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  showMark: PropTypes.bool,
};
