import { Avatar } from "antd";
import React from "react";
import one from "../../assets/icons/1.svg";
import two from "../../assets/icons/2.svg";
import three from "../../assets/icons/3.svg";
import four from "../../assets/icons/4.svg";
import blue from "../../assets/images/blue.svg";
import orange from "../../assets/images/orange.svg";
import pink from "../../assets/images/pink.svg";
import red from "../../assets/images/red.svg";
import avatar1 from "../../assets/icons/avatar1.svg";
import avatar2 from "../../assets/icons/avatar2.svg";
import avatar3 from "../../assets/icons/avatar3.svg";
import avatar4 from "../../assets/icons/avatar4.svg";
import styles from "./styles.module.scss";

export const Commands = () => {
  const text = "1111";
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <p className={styles.header}>Факультеты</p>
          <div className={styles.flex}>
            <d className={styles.title}>Рейтинг</d>
            <p className={styles.title}>Факультет</p>
          </div>
          <div className={styles.row}>
            <img className={styles.ratingImg} src={one} />
            <p className={styles.greenText}>{text}</p>
            <img className={styles.facultiesImg} src={pink} />
            <p className={styles.text}>
              Естественные
              <br />и математические науки
            </p>
          </div>
          <div className={styles.row}>
            <img className={styles.ratingImg} src={two} />
            <p className={styles.greenText}>1023</p>
            <img className={styles.facultiesImg} src={blue} />
            <p className={styles.text}>Гуманитарные науки</p>
          </div>
          <div className={styles.row}>
            <img className={styles.ratingImg} src={three} />
            <p className={styles.greenText}>801</p>
            <img className={styles.facultiesImg} src={orange} />
            <p className={styles.text}>Технологии</p>
          </div>
          <div className={styles.row}>
            <img className={styles.ratingImg} src={four} />
            <p className={styles.greenText}>788</p>
            <img className={styles.facultiesImg} src={red} />
            <p className={styles.text}>Социально-экономические науки</p>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <p className={styles.header}>Больше всего ответили</p>
          <div className={styles.column}>
            <div className={styles.secondRow}>
              <div className={styles.center}>
                <Avatar src={avatar1} />
                <p className={styles.user}>Мария Лукшина Георгиевна</p>
              </div>
            </div>
            <div className={styles.secondRow}>
              <div className={styles.center}>
                <div className={styles.center}>
                  <Avatar src={avatar2} />
                  <p className={styles.user}>Неёлов Александр Валерьевич</p>
                </div>
              </div>
            </div>
            <div className={styles.secondRow}>
              <div className={styles.center}>
                <Avatar src={avatar3} />
                <p className={styles.user}>Рассказова Елизавета Тихомирова</p>
              </div>
            </div>
            <div className={styles.secondRow}>
              <div className={styles.center}>
                <Avatar src={avatar4} />
                <p className={styles.user}>Константин Константинопольский Константинович</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
