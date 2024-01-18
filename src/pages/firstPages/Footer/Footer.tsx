import {useState} from "react";
import {NavLink} from "react-router-dom";

import {navigate} from "../../../common/variablesData/nav";
import {timeInfo} from "../../../common/variablesData/timeInfo";

import {Clock} from "../../../components/Clock/Clock";
import {ButtonCall} from "../../../components/ButtonCall/ButtonCall";

import styles from './Footer.module.scss'

let timeData: Array<{city: string, timezone: number }> = timeInfo

const navNames: Array<{ name: string }> = navigate

export const Footer = () => {
    const [navName, setNavName] = useState<string>(navNames[0].name)
    const changeNav = (name: string) => setNavName(name)
    return (
        <div className={styles.footerContainer} >
            <nav className={styles.navLink} >
                {navNames.map((el, i) => {
                    return (
                        <NavLink
                            key={i}
                            to={'/USA_Cars'}
                            onClick={() => changeNav(el.name)}
                            className={el.name !== navName ?
                                styles.nav :
                                styles.nav + ' ' + styles.activeNav} >
                            {el.name}
                        </NavLink >
                    )
                })}
            </nav >
            <ButtonCall title={'Бесплатная консультация'}/>
            <div className={styles.line}/>
            <div className={styles.bottomInfo} >
                <div className={styles.copyright} >
                    2022 Все права защищены. <span>Политика конфиденциальности</span>
                </div >
                <div className={styles.time} >
                    {timeData.map((el, i) => {
                        return (
                            <Clock
                            key={i}
                            city={el.city}
                            timezone={el.timezone}
                            />
                        )
                    })}
                </div >
            </div >
        </div >
    )
}

