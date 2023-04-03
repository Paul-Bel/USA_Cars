import {FC} from "react";

import questionButton from "../../../common/img/buttons/questionButton.png";
import closeButton from "../../../common/img/buttons/closeButton.png";

import styles from "./Question.module.scss";

interface QuestionType {
    question: string,
    answer: string,
    id: number,
    isOpen: boolean,
    callBack: (id: number) => void
}

export const Question: FC<QuestionType> = (
    {
        question,
        answer,
        id,
        callBack,
        isOpen,
    }) => {

    return (
        <div
            className={styles.questionBlock}
            style={isOpen ? {} :
                {
                    border: '1px solid #FFC5C5',
                    boxShadow: '0px 12px 34px rgba(0, 0, 0, 0.11'
                }} >
            <div
                className={styles.singleQuestion}

            >
                    <span >
               {question}
                    </span >
                {isOpen ?
                    <img
                        src={questionButton}
                        alt="click"
                        className={styles.button}
                        onClick={() => callBack(id)} /> :
                    <img
                        src={closeButton}
                        alt="click"
                        className={styles.button}
                        onClick={() => callBack(0)} />
                }
            </div >
            {!isOpen && <span   style={isOpen ? {} :
                {margin: '-10px 20px 20px 20px'}
            } >{answer}</span >}
        </div >
    )
}