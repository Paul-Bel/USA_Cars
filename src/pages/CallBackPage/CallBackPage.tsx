import styles from './CallBackPage.module.scss'

export const CallBackPage = () => {

    return (
        <div className={styles.callBackFrame} >
            <div className={styles.descriptionCall} >
                <p >Сложно выбрать автомобиль?</p >
                <p >Бесплатная консультация нашего эксперта по подбору авто из Америки</p >
                <div className={styles.contactContainer} >
                    <input />
                    <input />
                    <button >Бесплатная консультация</button >
                </div >
                <div className={styles.SC} >
                    <span >Мы в месеенджерах</span >
                    <a href="#" />
                    <a href="#" />
                    <a href="#" />
                </div >
            </div >
            <div className={styles.footer} />
        </div >
    )
}