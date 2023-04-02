import {useState} from "react";
import logo from '../../common/img/Logo.png'

import styles from './Header.module.scss'
import {ButtonCall} from "../../components/ButtonCall/ButtonCall";
import {NavMenu} from "./NavMenu/NavMenu";


const animationOn = {
    transform: 'rotate(90deg)',
    transitionDuration: '1.5s'
}

const animationOff = {
    transform: 'rotate(0deg)',
    transitionDuration: '1.5s'
}

const burgerOff = {
    marginLeft: '-1800px',
    transitionDuration: '0.7s',
}
const burgerOn = {
    marginLeft: '-18px',
    transitionDuration: '0.7s',
}

export const Header = () => {

    const [menu, setMenu] = useState<boolean>(false)

    return (
        <div className={styles.headerFrame} >
            <div
                className={styles.burgerMenu}
                style={menu ? animationOn : animationOff}
                onClick={() => setMenu(!menu)}
            />
            <img src={logo} alt={''} />
            <NavMenu
                style={menu ? burgerOn : burgerOff}
                closedMenu={() => setMenu(false)}/>
            <span className={styles.buttonCallBack} >
                        <ButtonCall
                            title={'Заказать звонок'}
                            className={styles.buttonCallBack} />
                    </span >
        </div >
    )
}