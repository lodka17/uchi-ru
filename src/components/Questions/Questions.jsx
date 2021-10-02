import { Select, Slider, Input, TimePicker, DatePicker, Switch, Tag } from "antd";
import { Option } from "antd/es/mentions";
import moment from "moment";
import React from "react";
import { Button } from "../../components-ui/Button";
import titlesStyle from "../Help/styles.module.scss";
import styles from "./styles.module.scss";

export const Questions = () => {
  const marks = {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
  };
  const format = "HH:mm";
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Задай свой вопрос</p>
      <div className={styles.flex}>
        <div className={styles.question}>
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
          <p className={titlesStyle.titles}> Задать вопрос </p>
          <div className={styles.input}>
            <Input placeholder="Basic usage" />
          </div>
          <p className={titlesStyle.titles}> Сложность вопроса </p>
          <div className={titlesStyle.slider}>
            <Slider marks={marks} step={null} defaultValue={0} max={4} />
          </div>
          <p className={titlesStyle.titles}> Время </p>
          <div className={titlesStyle.timeModule}>
            <div className={titlesStyle.timeContainer}>
              <TimePicker defaultValue={moment("12:08", format)} format={format} />
              <DatePicker onChange={onChange} />
              <Switch defaultChecked onChange={onChangeSwitch} />
              <span>Срочно</span>
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
          <p className={titlesStyle.titles}> Возможные темы </p>
          <div>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
          </div>
        </div>
      </div>
      <Button className={styles.button}>Задать вопрос</Button>
    </div>
  );
};
