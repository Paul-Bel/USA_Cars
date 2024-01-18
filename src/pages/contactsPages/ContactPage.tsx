import styles from "./ContactPage.module.scss"

import {Contacts} from "./Contacts/Contacts";
import {Documents} from "./Documents/Documents";
import {ContactClocks} from "./ContactClocks/ContactCloks";
import {CallBackPage} from "../firstPages/CallBackPage/CallBackPage";
import {Subscription} from "../firstPages/Subscription/Subscription";
import {Footer} from "../firstPages/Footer/Footer";
import {Representatives} from "./Representatives/Representatives";


export const ContactPage = () => {

    return (
        <div className={styles.contactsMainContainer} >
                <Contacts />
                <Documents />
                <ContactClocks />
                <Representatives />
                <CallBackPage />
                <Subscription />
                <Footer />
        </div >
    )
}