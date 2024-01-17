import {Header} from "../../../components/Header/Header";
import styles from "./Contacts.module.scss"

import {contactsCards} from "../../../common/variablesData/contactsCard"
import {ContactCards} from "../../../components/ContactCards/ContactCards";


export const Contacts = () => {

    return (
        <div className={styles.contactContainer} >
            <Header />
            <div className={styles.descriptionContainer} >
                <h4 className={styles.headerName} >Контакты</h4 >
                <span className={styles.callUs} >Свяжитесь с нами</span >
                <span className={styles.description} >Равным образом постоянный количественный рост и сфера нашей активности </span >
                <span className={styles.description} >в значительной степени обуславливает создание существенных финансовых </span >
            </div >
            <div className={styles.contactsItem} >{contactsCards.map((el, i) => {
                return <ContactCards
                    key={i}
                    icon={i + 1}
                    firstContact={el.firstContacts}
                    secondContact={el.secondContacts} />
            })}
            </div >
        </div >
    )
}