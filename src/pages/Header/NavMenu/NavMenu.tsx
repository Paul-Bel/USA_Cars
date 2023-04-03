import {useState} from "react";
import {NavLink} from "react-router-dom";
import React, {MouseEvent} from 'react';

import {navigate} from "../../../common/variablesData/nav";
import {ButtonFindCar} from "../../../components/ButtonFindCar/ButtonFindCar";

import phone from "../../../common/img/PhoneVector.png";

import styles from './NavMenu.module.scss'

const navNames: Array<{ name: string }> = navigate

type NavMenuType = {
    style: {
        marginLeft: string
        transitionDuration: string
    }
    closedMenu: () => void
}

export const NavMenu: React.FC<NavMenuType> = ({style, closedMenu}) => {
    const [navName, setNavName] = useState<string>(navNames[0].name)
    const changeNav = (name: string) => setNavName(name)

    const closedWindow = (e: MouseEvent) => {
        e.stopPropagation()
        // closedMenu()
    }


    return (
        <nav
            className={styles.headerLink}
            style={style}
            onClick={(e) => closedWindow(e)}
        >
            {navNames.map((el, i) => {
                return (
                    <NavLink
                        key={i}
                        to={'/USA_Cars'}
                        onClick={() => changeNav(el.name)}
                        className={el.name !== navName ?
                            styles.headerText :
                            styles.headerText + ' ' + styles.activeNav} >
                        {el.name}
                    </NavLink >
                )
            })}
            <NavLink
                to={''}
                className={styles.callBack} >
                    <span className={styles.contacts} >
                        <img src={phone} alt="phone" className={styles.icon} />
                        <span className={styles.phoneText} >+1 440 212 5612</span >
                    </span >
                <span className={styles.aboutCallBack} >заказать звонок</span >
            </NavLink >
            <ButtonFindCar
                title={'Подобрать автомобиль'}
                className={styles.findCar}
            />
        </nav >
    )
}