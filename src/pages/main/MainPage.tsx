
import {StartPage} from "../StartPage/StartPage";
import {PopularCars} from "../PopularCars/PopularCars";
import {CallBackPage} from "../CallBackPage/CallBackPage";
import {AboutUs} from "../AboutUs/AboutUs";
import {Auctions} from "../Auctions/Auctions";

import styles from "./MainPage.module.scss"
import {FAQ} from "../FAQ/FAQ";

export const MainPage = () => {

    return (
        <div className={styles.mainFrame} >
            <StartPage/>
            <PopularCars/>
            <CallBackPage/>
            <AboutUs/>
            <Auctions/>
            <FAQ/>
        </div >
    )
}