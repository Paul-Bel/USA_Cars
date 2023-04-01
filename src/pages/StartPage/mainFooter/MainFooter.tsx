import styles from './MainFooter.module.scss'

import TW from '../../../common/img/sc/TW.png'
import UT from '../../../common/img/sc/UT.png'
import IN from '../../../common/img/sc/IN.png'
import FB from '../../../common/img/sc/FB.png'



export const MainFooter = () => {

    return (
        <div className={styles.footerContainer}>
            <img src={TW} alt="" className={styles.SC}/>
            <img src={UT} alt="" className={styles.SC}/>
            <img src={IN} alt="" className={styles.SC}/>
            <img src={FB} alt="" className={styles.SC}/>
            <span className={styles.ScDescription}>Мы в соц. сетях</span>
        </div >
    )
}