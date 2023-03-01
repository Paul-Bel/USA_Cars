import video from '../../common/img/Video/Video.png'

import styles from './AboutUs.module.scss'


export const AboutUs = () => {

    return (
        <div className={styles.aboutUsContainer} >
            <div className={styles.activeBlock} >
                <div className={styles.aboutUs} >
                    <div className={styles.titleContainer} >
                        <div className={styles.title} >О нас</div >
                        <div className={styles.line} />
                    </div >
                    <span className={styles.aboutText} >
                        Наша компания Evaautologistics LLC –
                        это ваш надежный партнер по вопросам покупки авто из США с доставкой.
                        Мы доставим авто в любую страну:
                        Россию, Беларусь, Украину, Казахстан, Грузию, Азербайджан, Узбекистан
                    </span >
                </div >
                <div className={styles.videoContainer} >
                    <div className={styles.backgroundLeft} />
                    <div className={styles.video}
                         style={{
                             backgroundImage: `url(${video})`,
                             backgroundRepeat: 'no-repeat',
                             backgroundPosition: 'center'
                         }}
                    />
                    <div className={styles.backgroundRight} />
                </div >
            </div >
            <div className={styles.descriptions} >
                <p className={styles.descriptionItem} >
                    <span className={styles.paragraph} />
                    <b >Работаем без посредников</b > и экономим ваш бюджет;</p >
                <p className={styles.descriptionItem} >
                    <span className={styles.paragraph} />
                    <b >Имеем все необходимые лицензии</b > для работы с аукционами Copart, IAAI, Manheim, ADESA.</p >
                <p className={styles.descriptionItem} >
                    <span className={styles.paragraph} />
                    <b >Физическое нахождение в США</b > позволяет нам осуществить осмотр и оценить автомобиль до
                    покупки.</p >
                <p className={styles.descriptionItem} >
                    <span className={styles.paragraph} />
                    <b >Широкий спектр дополнительных услуг:</b > подготовка автомобиля к отправке, укомплектовка
                    запасными частями
                    и оборудованием, ремонт, а также страхование груза, если Вам это необходимо. </p >
                <p className={styles.descriptionItem} >
                    <span className={styles.paragraph} />
                    <b >Индивидуальный подход к каждому клиенту,</b > при покупке нового авто или автомобиля с пробегом.
                </p >
            </div >
        </div >
    )
}