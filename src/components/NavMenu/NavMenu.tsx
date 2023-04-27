import {useState} from "react";
import {NavLink} from "react-router-dom";
import React, {MouseEvent} from 'react';

import {navigate} from "../../common/variablesData/nav";
import {ButtonFindCar} from "../ButtonFindCar/ButtonFindCar";

import phone from "../../common/img/miscellaneous/PhoneVector.png";

import styles from './NavMenu.module.scss'

const navNames: Array<{ name: string, path: string }> = navigate

type NavMenuType = {
    style: {
        marginLeft: string
        transitionDuration: string
    }
    closedMenu: () => void
}

export const NavMenu: React.FC<NavMenuType> = ({style, closedMenu}) => {

    let activeMenuUrl = navNames.filter(f => document.URL.includes(f.path))
        ? navNames.filter(f => document.URL.includes(f.path))[0].name
        : navNames[0].name

    const [navName, setNavName] = useState<string>(activeMenuUrl)
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
                        to={el.path}
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