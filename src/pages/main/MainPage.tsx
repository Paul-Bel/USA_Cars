import React from "react";
import styles from "./MainPage.module.scss"
import {StartPage} from "../StartPage/StartPage";
import {PopularCars} from "../PopularCars/PopularCars";
import {CallBackPage} from "../CallBackPage/CallBackPage";

export const MainPage = () => {

    return (
        <div className={styles.mainFrame} >
            <StartPage/>
            <PopularCars/>
            <CallBackPage/>
        </div >
    )
}