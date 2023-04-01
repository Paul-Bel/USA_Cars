import copart from '../../common/img/auctions/Copart.png'
import aiia from '../../common/img/auctions/Aiia.png'
import manheim from '../../common/img/auctions/Manheim.png'
import npa from '../../common/img/auctions/NPA.png'
import adesa from '../../common/img/auctions/Adesa.png'

import styles from './Auctions.module.scss'


export const Auctions = () => {
    return (
        <div className={styles.auctionsContainer} >
            <div className={styles.title} >
                <span className={styles.line} />
                <span >Аукционы с которыми мы работаем</span >
                <span className={styles.line} />
            </div >
            <div className={styles.item} >
                <span>Поиск и приобретение любого транспорта на аукционах США:</span>
                <img src={copart} alt="make" />
                <img src={aiia} alt="make" />
                <img src={manheim} alt="make" />
                <img src={npa} alt="make" />
                <img src={adesa} alt="make" />
            </div >
        </div >
    )
}
