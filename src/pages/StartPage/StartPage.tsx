import {Header} from "../header/Header";
import {HeaderDescriptions} from "./HeaderDescriptions/HeaderDescriptions";
import {MainCars} from "./mainCars/MainCars";
import {MainFooter} from "./mainFooter/MainFooter";

import styles from "./StartPage.module.scss";
import {QuickMenu} from "./QuickMenu/QuickMenu";



export const StartPage = () => {

    return (
        <div className={styles.mainFirst} >
            <Header />
            <div className={styles.descriptionsContainer} >
                <HeaderDescriptions />
                <MainCars />
            </div >
            <MainFooter/>
            <QuickMenu/>
        </div >
    )
}

