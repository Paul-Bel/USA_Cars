import styles from "./Documents.module.scss";

import paper from "../../../common/img/contactsImg/paper-mockup.png"
import {useState} from "react";
import {Counter} from "../../../components/Counter/Counter";


const documents: Array<string> = ['Равным образом постоянный количественный рост и сфера нашей активности  значительной степени обуславливает создание существенных финансовых и административных условий. ' +
'' +
'Разнообразный и богатый опыт начало повседневной работы по формированию позиции ительной степени обуславливает создание направлений прогрессивного развития. Разнообразный и богатый опыт реализация намеченных плановых заданий позволяет оценить значение соответствующий условий активизации',
    'Равным образом постоянный количественный рост и сфера нашей активности  значительной степени обуславливает создание существенных финансовых и административных условий. ' +
    '' +
    'Разнообразный и богатый опыт начало повседневной работы по формированию позиции ительной степени обуславливает создание направлений прогрессивного развития',
    'Равным образом постоянный количественный рост и сфера нашей активности  значительной степени обуславливает создание существенных финансовых и административных условий. ' +
    '' +
    'Разнообразный и богатый опыт начало повседневной работы по формированию позиции ительной степени обуславливает создание направлений прогрессивного развития',
    'Равным образом постоянный количественный рост и сфера нашей активности  значительной степени обуславливает создание существенных финансовых и административных условий. ' +
    '' +
    'Разнообразный и богатый опыт начало повседневной работы по формированию позиции ительной степени обуславливает создание направлений прогрессивного развития']

type DataType = [string, string, number]

export const Documents = () => {

    const [doc, setDoc] = useState<DataType>([documents[0], documents[1], 2])

    const update = (value: DataType) => setDoc(value)
    console.log(window.innerWidth)
    return (
        <div className={styles.documentContainer} >
            <div className={styles.documents} >Документы</div >
            {window.innerWidth < 980 &&
                <div className={styles.counterContainerMobile}>
                    <Counter value={documents} update={update} color={'red'} countStep={1} />
                </div >}
            <div className={styles.descriptionContainer} >
                <div className={styles.img} >
                    <img
                        className={styles.imgPaper}
                        src={paper}
                        alt={'doc'} />
                </div >
                <div className={styles.descriptionsContainer} >
                    {window.innerWidth > 980 &&
                        <Counter value={documents} update={update} color={'red'} countStep={1} />}
                    <div className={styles.title} >Документ 1</div >
                    <div className={styles.description} >{doc}</div >

                </div >
            </div >
        </div >
    )
}