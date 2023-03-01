import React from "react";
import styles from "./MainPage.module.scss"
import {StartPage} from "../StartPage/StartPage";
import {PopularCars} from "../PopularCars/PopularCars";
import {CallBackPage} from "../CallBackPage/CallBackPage";
import {AboutUs} from "../AboutUs/AboutUs";

export const MainPage = () => {

    return (
        <div className={styles.mainFrame} >
            <StartPage/>
            <PopularCars/>
            <CallBackPage/>
            <AboutUs/>
        </div >
    )
}