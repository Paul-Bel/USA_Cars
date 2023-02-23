import React from "react";
import styles from "./MainPage.module.scss"
import {FirstPage} from "./firstPage/FirstPage";

export const MainPage = () => {

    return (
        <div className={styles.mainFrame} >
            <FirstPage/>
        </div >
    )
}