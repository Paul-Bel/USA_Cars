import styles from './QuickMenu.module.scss'
import {useState} from "react";

type QuickMenuType = {name: string, id: number}

const quickMenuActive: Array<QuickMenuType> = [
    {name: 'Auction', id: 1},
    {name: 'New', id: 2},
    {name: 'Exclusive', id: 3},
    {name: 'Calculator', id: 4},
]

export const QuickMenu = () => {

    const [activeMenu, setActiveMenu] = useState<string>('')
    const changeActiveMenu = (name: string) => name !== activeMenu ? setActiveMenu(name) : setActiveMenu('')

    return (
        <div className={styles.menuContainer} >
            {quickMenuActive.map((el, i) => {
                return <div
                    key={el.id}
                    onClick={()=>changeActiveMenu(el.name) }
                    className={el.name === activeMenu
                        ? styles.menuItem + ' ' + styles.activeMenu
                        : styles.menuItem} >

                </div >
            })}
        </div >
    )
}