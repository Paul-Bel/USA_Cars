import styles from "./FirstPage.module.scss";
import {Header} from "../../header/Header";
import {HeaderDescriptions} from "./HeaderDescriptions/HeaderDescriptions";
import {MainCars} from "./mainCars/MainCars";
import {MainFooter} from "./mainFooter/MainFooter";



export const FirstPage = () => {

    return (
        <div className={styles.mainFirst} >
            <Header />
            <div className={styles.descriptionsContainer} >
                <HeaderDescriptions />
                <MainCars />
                <MainFooter/>
            </div >
        </div >
    )
}

