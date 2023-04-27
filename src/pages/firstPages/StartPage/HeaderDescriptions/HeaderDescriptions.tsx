import styles from "./HeaderDescriptions.module.scss";
import React from "react";
import {ButtonFindCar} from "../../../../components/ButtonFindCar/ButtonFindCar";


export const HeaderDescriptions = () => {

    return (
        <div className={styles.frame}>
            <div className={styles.descriptions} >
                <span className={styles.descrOne} >
                    Подбор и доставка авто с аукционов США
                </span >
                <span className={styles.descrTwo} >
                    Подбор и доставка техники и автомобилей из Америки напрямую, без посредников.
                    Авто с незначительными повреждениями, по средней цене американских аукционов.
                </span >
            </div >
            <ButtonFindCar
                title={'Подобрать автомобиль'}
                descriptions={'Многолетний опыт и надежный сервис'}/>
        </div >
    )
}