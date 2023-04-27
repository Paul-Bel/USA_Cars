import {StartPage} from "../firstPages/StartPage/StartPage";
import {PopularCars} from "../firstPages/PopularCars/PopularCars";
import {CallBackPage} from "../firstPages/CallBackPage/CallBackPage";
import {AboutUs} from "../firstPages/AboutUs/AboutUs";
import {Auctions} from "../firstPages/Auctions/Auctions";
import {FAQ} from "../firstPages/FAQ/FAQ";
import {Reviews} from "../firstPages/Reviews/Reviews";
import {Subscription} from "../firstPages/Subscription/Subscription";
import {Footer} from "../firstPages/Footer/Footer";

import styles from "./MainPage.module.scss"

export const MainPage = () => {

    return (
        <div className={styles.mainFrame} >
            <StartPage/>
            <PopularCars/>
            <CallBackPage/>
            <AboutUs/>
            <Auctions/>
            <FAQ/>
            <Reviews/>
            <Subscription/>
            <Footer/>
        </div >
    )
}