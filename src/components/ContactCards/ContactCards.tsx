import styles from './ContactCards.module.scss'

import location from '../../common/img/contactsImg/location.png'
import coolicon from '../../common/img/contactsImg/coolicon.png'
import mail from '../../common/img/contactsImg/mail.png'
import React from "react";

type icons = {
    icon: number;
    firstContact: string
    secondContact: string
}

export const ContactCards: React.FC<icons> = ({icon, firstContact, secondContact}) => {
    const iconImg = icon === 1 ? location : icon === 2 ? coolicon : mail

    return (

        <div className={styles.cardContainer} >
            <img className={styles.img}
                 src={iconImg}
                 alt="icon"
            width={24}
            height={24}/>
            <div className={styles.firstData} >
                {firstContact}
            </div >
            <div className={styles.secondData} >
                {secondContact}
            </div >
        </div >
    )
}