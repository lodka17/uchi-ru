import { Avatar, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import chat from "../../assets/icons/chat.svg";
import like from "../../assets/icons/like.svg";
import mark from "../../assets/icons/mark.svg";
import titlesStyle from "../Help/styles.module.scss";
import styles from "./styles.module.scss";

export const Answers = () => {
  const answers = 45;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Активный вопрос</div>
      <p className={titlesStyle.titles}> Заданный вопрос </p>
      <Select
        showSearch
        style={{ width: 695, marginBottom: 42 }}
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
        style={{ width: 695, marginBottom: 42 }}
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
      <div className={styles.answersCountContainer}>
        <p className={titlesStyle.titles}> Ответы на вопросы </p>
        <p className={styles.answersCount}>{answers} ответов</p>
      </div>
      <div className={styles.container}>
        <div className={styles.answersContainer}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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
            <p>Лайк</p>
          </div>
          <div>
            <img className={styles.img} src={chat} />
            <p>Чат</p>
          </div>
          <div>
            <img src={mark} />
            <p>Оценка</p>
          </div>
        </div>
      </div>
    </div>
  );
};
