import React from 'react'
import styles from "./styles.module.scss";

const title = 'Ты помог ответить на 20 вопросов',
    notice = 'Уведомления',
    subtitle = 'История'

const historyTitles = [
    {
        name: 'Дата',
    },
    {
        name: 'Предмет',
    },
    {
        name: 'Заданный вопрос',
    },
    {
        name: 'Ответ',
    },
    {
        name: 'Статус',
    },
]

const tabel = [
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка',
    },
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка',
    },
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка',
    },
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка',
    },
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка',
    },
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка',
    },
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка',
    },
]

export const History = () => {
    console.log('a')
    return (
        <main className={styles.history}>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <h1>{title}</h1>
                    <a href="#">{notice}</a>
                </div>
                <div className={styles.flex}>
                    <h2>{subtitle}</h2>
                    <select>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className={styles.table}>
                    <div className={styles.row}>
                        {historyTitles.map((el) => (
                            <div key={el}>
                                {el.name}
                            </div>
                        ))}
                    </div>
                    {
                        tabel.map((el) => (
                            <div className={styles.row} key={el}>
                                <div>
                                    <b>{el.date}</b> в {el.dateTime}
                                </div>
                                <div>
                                    {el.subject}
                                </div>
                                <div aria-label={el.question} className={styles.question}>
                                    <span>{el.question}</span>
                                </div>
                                <div>
                                    {el.answer}
                                </div>
                                <div className={styles.status}>
                                    {el.status}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}
