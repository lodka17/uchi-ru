import { Select, Slider, Input, TimePicker, DatePicker, Switch, Tag } from "antd";
import { Option } from "antd/es/mentions";
import moment from "moment";
import React, { useState } from "react";
import { Button } from "../../components-ui/Button";
import titlesStyle from "../Help/styles.module.scss";
import styles from "./styles.module.scss";
export const Questions = () => {
  const marks = {
    0: {
      style: {
        color: "#5A7494",
      },
      label: <strong>0</strong>,
    },
    1: {
      style: {
        color: "#5A7494",
      },
      label: <strong>1</strong>,
    },
    2: {
      style: {
        color: "#5A7494",
      },
      label: <strong>2</strong>,
    },
    3: {
      style: {
        color: "#5A7494",
      },
      label: <strong>3</strong>,
    },
    4: {
      style: {
        color: "#5A7494",
      },
      label: <strong>4</strong>,
    },
  };
  const format = "HH:mm";
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }

  const [isTheme, setIsTheme] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Задай свой вопрос</p>
      <div className={styles.flex}>
        <div className={styles.question}>
          <p className={titlesStyle.titles}> Предмет </p>
          <div className={styles.select}>
            <Select
              showSearch
              style={{ width: 795, marginBottom: 42 }}
              placeholder="Предмет"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Биология</Option>
              <Option value="1">История</Option>
              <Option value="2">Математика</Option>
              <Option value="3">География</Option>
              <Option value="4">Астрономия</Option>
              <Option value="5">Физика</Option>
              <Option value="6">Геометрия</Option>
            </Select>
          </div>
          <p className={titlesStyle.titles}> Задать вопрос </p>
          <div className={styles.input}>
            <Input placeholder="Задайте вопрос" className={styles.inputText} />
          </div>
          <p className={titlesStyle.titles}> Сложность вопроса </p>
          <div className={styles.slider}>
            <Slider marks={marks} step={null} defaultValue={0} max={4} />
          </div>
          <p className={titlesStyle.titles}> Время </p>
          <div className={titlesStyle.timeModule}>
            <div className={titlesStyle.timeContainer}>
              <TimePicker placeholder="00:00" format={format} />
              <DatePicker placeholder="21.05.2015" onChange={onChange} />
              <Switch className={styles.switch} defaultChecked onChange={onChangeSwitch} />
              <span className={styles.quick}>Срочно</span>
            </div>
            <span className={titlesStyle.hint}>
              Меняй время, если тебе нужен ответ
              <br />
              до определенного часа
            </span>
          </div>
        </div>
        <div className={styles.theme}>
          <p className={titlesStyle.titles}> Тема </p>
          <div className={styles.themeSelect}>
            <Select
              showSearch
              onChange={() => setIsTheme(true)}
              style={{ width: 695, marginBottom: 42 }}
              placeholder="Тема"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">История Франции</Option>
              <Option value="2">История России</Option>
              <Option value="3">История Китая</Option>
              <Option value="4">История Великобритании</Option>
            </Select>
          </div>
          {isTheme && (
            <>
              {" "}
              <p className={titlesStyle.titles}> Возможные темы </p>
              <div className={styles.tags}>
                <Tag className={styles.tag}>Вторая мировая война</Tag>
                <Tag className={styles.tag}>Холодная война</Tag>
                <Tag className={styles.tag}>Первая мировая война</Tag>
              </div>
            </>
          )}
        </div>
      </div>
      <Button className={styles.button}>Задать вопрос</Button>
    </div>
  );
};
