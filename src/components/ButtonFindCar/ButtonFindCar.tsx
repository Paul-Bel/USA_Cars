import styles from './ButtonFindCar.module.scss'

import React from "react";

type ButtonFindCarType = {
    title: string
    descriptions?: string
    className?: string
}

export const ButtonFindCar: React.FC<ButtonFindCarType> = ({title, className, descriptions}) => {
    console.log(descriptions, 'descriptions === \'true\'', descriptions === 'true')
    return (
        <div className={Boolean(!className) ? styles.buttonExperience : ''} >
            <button
                className={className ? className : styles.button}
            >
                {title}
            </button >
            <span className={styles.discrButton} >{descriptions}</span >
        </div >
    )
}