import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import key from "weak-key";
import bellSvg from "./images/bell.svg";
import headephoneSvg from "./images/headphone.svg";
import styles from "./styles.module.scss";

const navLeft = [
  {
    name: "Личный кабинет",
    link: "profile",
  },
  {
    name: "Задай вопрос",
    link: "questions",
  },
  {
    name: "Ответы на вопросы",
    link: "answers",
  },
  {
    name: "Магазин",
    link: "store",
  },
  {
    name: "Факультет",
    link: "faculties",
  },
];

const NavRight = [
  {
    title: "Чат",
    name: "chat",
    link: "chat",
    svg: headephoneSvg,
  },
  {
    title: "Помощь",
    name: "help",
    link: "help",
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
                <NavLink to={el.link}>{el.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className={styles.list}>
            {NavRight.map((el) => (
              <li className={styles.right} key={key(el)}>
                <NavLink to={el.link}>{el.title}</NavLink>
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
