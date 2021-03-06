import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import React, { useState } from "react";
import key from "weak-key";
import styles from "./styles.module.scss";

const title = "Ты помог ответить на 20 вопросов",
  notice = "Уведомления",
  noticeNumber = "5",
  subtitle = "История";

const historyTitles = [
  {
    name: "Дата",
  },
  {
    name: "Предмет",
  },
  {
    name: "Заданный вопрос",
  },
  {
    name: "Ответ",
  },
  {
    name: "Статус",
  },
  {
    name: "Лайки",
  },
];

const tabel = [
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "50",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "40",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "10",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "5",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "3",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "10",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "25",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "7",
  },
  {
    link: "",
    date: "20.05.2020",
    dateTime: "14:47",
    subject: "Всеобщая история",
    question: "Как называлась программа М.С Горбачёва, проводима во внешней политике",
    answer: "Холодная война",
    status: "Пятёрочка",
    likes: "1",
  },
];

export const History = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  // Fri Oct 01 2021 00:00:00 GMT+0200 (Центральная Европа, летнее время)
  // Fri Oct 22 2021 23:59:59 GMT+0200 (Центральная Европа, летнее время)

  return (
    <main className={styles.history}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <p className={styles.title}>{title}</p>
          <a href="#" className={styles.noticeLink}>
            {notice} <span>{noticeNumber}</span>
          </a>
        </div>
        <div className={styles.flex}>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.datepicker}>
            <DateRangePicker onChange={onChange} value={value} />
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.row}>
            {historyTitles.map((el) => (
              <div key={key(el)}>{el.name}</div>
            ))}
          </div>
          {tabel.map((el) => (
            <a href={el.link} className={styles.row} key={key(el)}>
              <div>
                <b>{el.date}</b>
                {" в "}
                {el.dateTime}
              </div>
              <div>{el.subject}</div>
              <div className={styles.question}>
                <span>{el.question}</span>
                <div className={styles.tooltip}>{el.question}</div>
              </div>
              <div>{el.answer}</div>
              <div className={styles.status}>{el.status}</div>
              <div className={styles.likes}>{el.likes}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};
