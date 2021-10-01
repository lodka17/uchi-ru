import React from 'react'
import './History.scss'

const title = 'Ты помог ответить на 20 вопросов',
    notice = 'Уведомления',
    subtitle = 'История'

const tabel = [
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка'
    },
    {
        date: '20.05.2020',
        dateTime: '14:47',
        subject: 'Всеобщая история',
        question: 'Как называлась программа М.С Горбачёва, проводима во внешней политике',
        answer: 'Холодная война',
        status: 'Пятёрочка'
    }
]

export const History = () => {
    console.log('a')
    return (
        <main className="history">
            <div className="container">
                <div className="flex">
                    <h1>{title}</h1>
                    <a href="#">{notice}</a>
                </div>
                <div className="flex">
                    <h2>{subtitle}</h2>
                    <select>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className="table">
                    {
                        tabel.map(el => (
                            <>
                                {el.date}
                            </>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}
