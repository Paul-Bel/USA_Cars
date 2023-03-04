import {NavLink} from "react-router-dom";
import {navigate} from "../../common/variablesData/nav";

import {useState} from "react";
import logo from '../../common/img/Logo.png'
import phone from '../../common/img/PhoneVector.png'

import styles from './Header.module.scss'
import {ButtonCall} from "../../components/ButtonCall/ButtonCall";

const navNames: Array<{ name: string }> = navigate

export const Header = () => {

    const [navName, setNavName] = useState<string>(navNames[0].name)
    const changeNav = (name: string) => setNavName(name)

    return (
        <div className={styles.headerFrame} >
            <img src={logo} alt={''}/>
            <nav className={styles.headerLink} >
                {navNames.map((el, i) => {
                    return (
                        <NavLink
                            key={i}
                            to={'/'}
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
                    <span className={styles.contacts}>
                        <img src={phone} alt="phone" className={styles.icon}/>
                        <span className={styles.phoneText}>+1 440 212 5612</span >
                    </span >
                    <span className={styles.aboutCallBack}>заказать звонок</span >

                </NavLink >

            </nav >
            <span className={styles.buttonCallBack}>
                        <ButtonCall
                            title={'Заказать звонок'}
                            className={styles.buttonCallBack}/>
                    </span>
        </div >
    )
}