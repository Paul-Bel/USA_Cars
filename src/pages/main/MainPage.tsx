import {StartPage} from "../StartPage/StartPage";
import {PopularCars} from "../PopularCars/PopularCars";
import {CallBackPage} from "../CallBackPage/CallBackPage";
import {AboutUs} from "../AboutUs/AboutUs";
import {Auctions} from "../Auctions/Auctions";
import {FAQ} from "../FAQ/FAQ";
import {Reviews} from "../Reviews/Reviews";
import {Subscription} from "../Subscription/Subscription";
import {Footer} from "../Footer/Footer";

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