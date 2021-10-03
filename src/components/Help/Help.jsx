import { Tabs, Select, Slider, TimePicker, DatePicker, Switch, Avatar } from "antd";
import moment from "moment";
import React from "react";
import { Button } from "../../components-ui/Button";
import buttonStyle from "../StartingForm/styles.module.scss";
import styles from "./styles.module.scss";
import avatar2 from "../../assets/icons/avatar2.svg";
import avatar3 from "../../assets/icons/avatar3.svg";
import avatar1 from "../../assets/icons/avatar1.svg";

export const Help = () => {
  const { TabPane } = Tabs;
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const answersCount = 86;
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
  const answersMarks = {
    0: {
      style: {
        color: "#7661D7",
      },
      label: <strong>0</strong>,
    },
    100: {
      style: {
        color: "#7661D7",
      },
      label: <strong>100</strong>,
    },
  };
  const format = "HH:mm";

  const names = [
    {
      name: "Мария Лукшина Георгиевна",
    },
    {
      name: "Неёлов Александр Валерьевич",
    },
    {
      name: "Рассказова Елизавета Тихомирова",
    },
  ];

  function callback(key) {
    console.log(key);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.header}> Вопросы </p>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        tabPosition="top"
        animated
        className={styles.tabs}
      >
        <TabPane tab="Помощь" key="1">
          <div className={styles.archive}>
            <p className={styles.titles}> Тема </p>
            <Select
              showSearch
              style={{ width: 695, marginBottom: 42 }}
              placeholder="Выберите тему"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Проблемы с доступами</Option>
              <Option value="2">Проблемы с авторизацией</Option>
              <Option value="3">Проблемы с сайтом</Option>
              <Option value="4">Проблемы с успеваемостью</Option>
            </Select>
            <p className={styles.titles}> Список вопросов </p>
            <Select
              showSearch
              style={{ width: 695, marginBottom: 42 }}
              placeholder="Выберите предмет"
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
            <p className={styles.titles}> Сложность вопроса </p>
            <div className={styles.slider}>
              <Slider marks={marks} step={null} defaultValue={0} max={4} />
            </div>
            <p className={styles.titles}> Время </p>
            <div className={styles.timeModule}>
              <div className={styles.timeContainer}>
                <TimePicker defaultValue={moment("12:08", format)} format={format} />
                <DatePicker disabledDate disabled className={styles.date} onChange={onChange} />
                <Switch defaultChecked onChange={onChangeSwitch} />
                <span>Срочно</span>
              </div>
              <span className={styles.hint}>
                Меняй время, если тебе нужен ответ
                <br />
                до определенного часа
              </span>
            </div>
            <Button className={buttonStyle.buttons}>Задать вопрос</Button>
          </div>
        </TabPane>
        <TabPane tab="Архив" key="2">
          <div className={styles.archive}>
            <p className={styles.titles}> Предмет </p>
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
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Select>
            <div className={styles.themeModule}>
              <div>
                <p className={styles.titles}> Тема </p>
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
                  <Option value="2">Closed</Option>
                  <Option value="3">Communicated</Option>
                  <Option value="4">Identified</Option>
                  <Option value="5">Resolved</Option>
                  <Option value="6">Cancelled</Option>
                </Select>
              </div>
            </div>
            <p className={styles.titles}> Количество баллов </p>
            <div className={styles.slider}>
              <Slider marks={marks} step={null} defaultValue={0} max={4} />
            </div>
            <div className={styles.answersCountModule}>
              <p className={styles.titles}> Количество ответов </p>
              <p className={styles.answersCount}> {answersCount} </p>
            </div>
            <div className={styles.slider}>
              <Slider
                marks={answersMarks}
                defaultValue={answersCount}
                max={100}
                draggableTrack={true}
              />
            </div>
            <p className={styles.titles}> Популярные консультанты </p>
            <div className={styles.consultants}>
              <div className={styles.users}>
                <Avatar src={avatar1} />
                Мария Лукшина
              </div>
              <div className={styles.users}>
                <Avatar src={avatar2} />
                Неёлов Александр Валерьевич
              </div>
              <div className={styles.users}>
                <Avatar src={avatar3} />
                Рассказова Елизавета Тихомирова
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};
