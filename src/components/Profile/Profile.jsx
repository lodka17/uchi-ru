import { Button } from "antd";
import React from "react";
import key from "weak-key";
import { Award } from "../../components-ui/Award/Award";
import { MarginGroup } from "../../components-ui/MarginGroup";
import { Progress } from "../../components-ui/Progress/Progress";
import { InfoCard } from "../../components/InfoCard";
import styles from "./styles.module.scss";

import calendar from "../../assets/icons/calendar.svg";
import ring from "../../assets/icons/ring.svg";
import star from "../../assets/icons/star.svg";
import instruments from "../../assets/icons/instruments.svg";

import avatar2 from "../../assets/icons/avatar2.svg";

import award1 from "../../assets/icons/award1.svg";
import award2 from "../../assets/icons/award2.svg";
import award3 from "../../assets/icons/award3.svg";
import award4 from "../../assets/icons/award4.svg";

import fac from "../../assets/icons/fac.svg";

const statistics = { solved: 10, given: 20 };

const faculty = {
  "id": 3,
  "name": "Печеньки",
  "score": 0,
  image: fac,
};

const awards = [
  { "id": 1, "name": "Только вперед", "text": "ыавпавртпа", "image": award1 },
  { "id": 2, "name": "Выживший", "text": "ыавпавртпа", "image": award2 },
  { "id": 3, "name": "Гуру во всем", "text": "ыавпавртпа", "image": award3 },
  { "id": 4, "name": "Ты сделал невозможное", "text": "ыавпавртпа", "image": award4 },
];

const blocks = [
  { img: calendar, name: "brth", value: "11.12.2021", title: "Дата рождения" },
  { img: ring, name: "username", value: "8 900 000 000 00", title: "Номер телефона" },
  { img: star, name: "email", value: "KonstantinK@mail.ru", title: "Email" },
  { img: instruments, name: "inst", value: "KonstantinK009", title: "Instagram" },
];

export const Profile = ({ procent, level }) => (
  <div className={styles.profile}>
    <InfoCard
      img={avatar2}
      age={"15"}
      lastname="Константинович"
      firstname="Константин"
      middlename="Константинопольский"
      status="Ученик"
      coin="10"
      blocks={blocks}
    />
    <MarginGroup className={styles.data}>
      <MarginGroup isColumn gap={20}>
        <p className={styles.title}>Мои награды</p>
        <MarginGroup gap={40} className={styles.awards}>
          {awards.map((el) => (
            <Award key={key(el)} image={el.image} name={el.name} />
          ))}
        </MarginGroup>
      </MarginGroup>
      <MarginGroup isColumn gap={20}>
        <p className={styles.title}>Статистика по вопросам</p>
        <MarginGroup gap={32}>
          <div className={styles.statistic}>
            <span>Заданные</span>
            <span>{statistics["given"]}</span>
          </div>
          <div className={styles.statistic}>
            <span>Заданные</span>
            <span>{statistics["given"]}</span>
          </div>
        </MarginGroup>
      </MarginGroup>
      <MarginGroup isColumn gap={20}>
        <p className={styles.title}>Факультет</p>
        <MarginGroup gap={18} className={styles.command}>
          <img src={faculty.image} />
          <p>{faculty.name}</p>
        </MarginGroup>
      </MarginGroup>
    </MarginGroup>
    <MarginGroup isColumn gap={24} className={styles.progress}>
      <p className={styles.title}>Уровень</p>
      <Progress procent={procent} level={level} />
    </MarginGroup>
    <div className={styles.footer}>
      <MarginGroup gap={20} className={styles.invite}>
        <Button className={styles.button}>Пригласить друга</Button>
        <p className={styles.text}>
          Нажимай <span className={styles.about}>подробнее</span> чтобы узнать <br />
          равила нашей реферальной программы
        </p>
      </MarginGroup>
      <p>5 моих дрезей присоединилось</p>
    </div>
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};
