import { Avatar, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import chat from "../../assets/icons/chat.svg";
import like from "../../assets/icons/like.svg";
import mark from "../../assets/icons/mark.svg";
import titlesStyle from "../Help/styles.module.scss";
import styles from "./styles.module.scss";
import avatar1 from "../../assets/icons/avatar1.svg";
import avatar2 from "../../assets/icons/avatar2.svg";
import avatar3 from "../../assets/icons/avatar3.svg";

export const Answers = () => {
  const answers = 45;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Активный вопрос</div>
      <p className={titlesStyle.titles}> Заданный вопрос </p>
      <Select
        showSearch
        style={{ width: 695, marginBottom: 42, marginTop: 12 }}
        defaultValue={"Кем было создано Древнерусское государство?"}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
      >
        <Option value="1">Not Identified</Option>
      </Select>
      <p className={titlesStyle.titles}> Предмет </p>
      <Select
        showSearch
        style={{ width: 695, marginBottom: 42, marginTop: 12 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        defaultValue="История"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
      >
        <Option value="1">Not Identified</Option>
      </Select>
      <div className={styles.answersCountContainer}>
        <p className={titlesStyle.titles}> Ответы на вопросы </p>
        <p className={styles.answersCount}>3 ответа</p>
      </div>
      <div className={styles.container}>
        <div className={styles.answersContainer}>
          <Avatar src={avatar1} />
          <div className={styles.flex}>
            <p className={styles.name}> Марина Лукшина </p>
            <p className={styles.text}>
              Древнерусское государство в Восточной Европе, возникшее в последней четверти IX в. в
              результате объединения под властью князей
            </p>
          </div>
        </div>
        <div className={styles.utils}>
          <div className={styles.column}>
            <img src={like} />
            <p className={styles.utilsTitle}>Лайк</p>
          </div>
          <div className={styles.column}>
            <img className={styles.img} src={chat} />
            <p className={styles.utilsTitle}>Чат</p>
          </div>
          <div className={styles.column}>
            <img src={mark} />
            <p className={styles.utilsTitle}>Оценка</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.answersContainer}>
          <Avatar src={avatar3} />
          <div className={styles.flex}>
            <p className={styles.name}> Елизавета Тихомирова </p>
            <p className={styles.text}>
              Древнерусское государство в Восточной Европе, возникшее в последней четверти IX в. в
              результате объединения под властью князей
            </p>
          </div>
        </div>
        <div className={styles.utils}>
          <div className={styles.column}>
            <img src={like} />
            <p className={styles.utilsTitle}>Лайк</p>
          </div>
          <div className={styles.column}>
            <img className={styles.img} src={chat} />
            <p className={styles.utilsTitle}>Чат</p>
          </div>
          <div className={styles.column}>
            <img src={mark} />
            <p className={styles.utilsTitle}>Оценка</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.answersContainer}>
          <Avatar src={avatar2} />
          <div className={styles.flex}>
            <p className={styles.name}> Константин Неёлов </p>
            <p className={styles.text}>
              Государство возникшее в последней четверти IX в. в результате объединения под властью
              князей
            </p>
          </div>
        </div>
        <div className={styles.utils}>
          <div className={styles.column}>
            <img src={like} />
            <p className={styles.utilsTitle}>Лайк</p>
          </div>
          <div className={styles.column}>
            <img className={styles.img} src={chat} />
            <p className={styles.utilsTitle}>Чат</p>
          </div>
          <div className={styles.column}>
            <img src={mark} />
            <p className={styles.utilsTitle}>Оценка</p>
          </div>
        </div>
      </div>
    </div>
  );
};
