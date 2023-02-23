import {NavLink} from "react-router-dom";
import {useState} from "react";

import styles from './Header.module.scss'
import logo from '../../common/img/Logo.png'
import phone from '../../common/img/PhoneVector.png'

const navNames: Array<{ name: string }> = [
    {name: 'Главная'},
    {name: 'Каталог'},
    {name: 'О нас'},
    {name: 'Контакты'},
]


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
                            to={'/'}
                            onClick={() => changeNav(el.name)}
                            className={el.name != navName ?
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
        </div >
    )
}