import styles from './Subscription.module.scss'

export const Subscription = () => {

    return (
        <div className={styles.subscriptionContainer} >
            <div className={styles.linkGroup} >
                <a href="#1" className={styles.TW} target={'_blank'} > </a >
                <a href="#1" className={styles.YT} > </a >
                <a href="#1" className={styles.IN} > </a >
                <a href="#1" className={styles.FB} > </a >
            </div >
            <div className={styles.telegram} >
                <a href="#1" className={styles.TG} > </a >
                <div className={styles.descriptionsFrame} >
                    <span className={styles.descriptions} >
                        <span >Подпишись</span >
                        <span > на наш Telegram</span >
                    </span >
                    <span >Получай ежедневно лучшую подборку авто от наших экспертов</span >
                </div >
            </div >
        </div >
    )
}