import WS from '../../common/img/sc/whatsappQ.png'
import VB from '../../common/img/sc/viberQ.png'
import TG from '../../common/img/sc/telegramQ.png'

import {Question} from "./Question/Question";

import styles from './FAQ.module.scss'

import {QuestionsAndAnswers} from '../../common/variablesData/questionsAndAnswers'
import {useState} from "react";

export const FAQ = () => {

    const [isOpen, setIsOpen] = useState<number>(0)

    const openAnswer = (id: number) => setIsOpen(id)

    return (
        <div className={styles.container} >
            <div className={styles.title} >
                <span className={styles.line} />
                <span >Ответили на самые частые вопросы</span >
                <span className={styles.line} />
            </div >
            {QuestionsAndAnswers.map(q => {
                return (
                    <Question
                        key={q.id}
                        question={q.question}
                        answer={q.answer}
                        id={q.id}
                        isOpen={isOpen !== q.id}
                        callBack={openAnswer} />
                )
            })}
            <div className={styles.questionFooter} >
                <span >Не нашли нужного ответа ?</span >
                <div className={styles.sc} >
                    <span >Задайте свой вопрос нашим экспертам</span >
                    <a href="#1" ><img src={WS} alt="WS" /></a >
                    <a href="#1" ><img src={VB} alt="VB" /></a >
                    <a href="#1" ><img src={TG} alt="TG" /></a >

                </div >

            </div >

        </div >
    )
}