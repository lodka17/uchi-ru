import { Avatar, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useReducer, useState } from "react";
import chat from "../../assets/icons/chat.svg";
import like from "../../assets/icons/like.svg";
import mark from "../../assets/icons/mark.svg";
import titlesStyle from "../Help/styles.module.scss";
import styles from "./styles.module.scss";
import avatar1 from "../../assets/icons/avatar1.svg";
import avatar2 from "../../assets/icons/avatar2.svg";
import avatar3 from "../../assets/icons/avatar3.svg";
import clsx from "clsx";
import key from "weak-key";
import { MarginGroup } from "../../components-ui/MarginGroup";

const fields = [
  {
    avatar: avatar1,
    name: "Марина Лукшина",
    text: "Древнерусское государство в Восточной Европе, возникшее в последней четверти IX в. в результате объединения под властью князей",
  },
  {
    avatar: avatar2,
    name: "Константин Неёлов",
    text: "Государство возникшее в последней четверти IX в. в результате объединения под властьюкнязей",
  },
  {
    avatar: avatar3,
    name: "Елизавета Тихомирова",
    text: "Древнерусское государство в Восточной Европе, возникшее в последней четверти IX в. в результате объединения под властью князей",
  },
];

const likes = [
  { value: "1", id: "1" },
  { value: "2", id: "2" },
  { value: "3", id: "3" },
  { value: "4", id: "4" },
  { value: "5", id: "5" },
];

const Like = ({ value, id, onClick, activeId }) => {
  const classes = clsx({ [styles.like]: true, [styles.activeLike]: id === activeId });

  return (
    <p className={classes} onClick={() => onClick(id)}>
      {value}
    </p>
  );
};

const Container = ({ avatar, name, text }) => {
  const [toggle, dispatch] = useReducer((state) => !state, false);
  const toggleClasses = clsx({ [styles.utils]: true, [styles.toggle]: toggle });
  const [isActiveLike, setActive] = useState("");

  const handleOnClick = (id) => {
    setActive(id);
  };
  console.log(toggle);
  return (
    <div className={styles.container}>
      <div className={styles.answersContainer}>
        <Avatar src={avatar} />
        <div className={styles.flex}>
          <p className={styles.name}> {name} </p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <div className={toggleClasses}>
        <MarginGroup className={styles.additionBtn}>
          <div className={styles.likes}>
            {likes.map((el) => (
              <Like key={el.id} {...el} activeId={isActiveLike} onClick={handleOnClick} />
            ))}
          </div>
          <p onClick={dispatch}>Оценить</p>
        </MarginGroup>
        <div className={styles.mainBtn}>
          <div className={styles.column}>
            <img src={like} />
            <p className={styles.utilsTitle}>Лайк</p>
          </div>
          <div className={styles.column}>
            <img className={styles.img} src={chat} />
            <p className={styles.utilsTitle}>Чат</p>
          </div>
          <div className={styles.column} onClick={dispatch}>
            <img src={mark} />
            <p className={styles.utilsTitle}>Оценка</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      {fields.map((el) => (
        <Container key={key(el)} name={el.name} text={el.text} avatar={el.avatar} />
      ))}
    </div>
  );
};
