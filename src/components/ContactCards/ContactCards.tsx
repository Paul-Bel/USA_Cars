import styles from './ContactCards.module.scss'

import location from '../../common/img/contactsImg/location.png'
import phone from '../../common/img/contactsImg/phone.png'
import mail from '../../common/img/contactsImg/mail.png'

import React from "react";

type icons = {
    icon: number;
    firstContact: string
    secondContact: string
    boxShadow?: {boxShadow: string; }
}

export const ContactCards: React.FC<icons> = (
    {icon, firstContact, secondContact, boxShadow}) => {
    const iconImg = icon+1 === 1 ? location : icon+1 === 2 ? phone : mail

    return (
        <div
            style={boxShadow ? boxShadow : {}}
            className={styles.cardContainer} >
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