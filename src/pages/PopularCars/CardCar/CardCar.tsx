import styles from './CardCar.module.scss'

type CardCarPropsType = {
    imgCar: string
    nameCar: string
}

export const CardCar = (props: CardCarPropsType) => {
    const {imgCar, nameCar} = props

    return (
        <div className={styles.cardContainer} >
            <img
                src={imgCar}
                className={styles.img}
                alt="1" />
            <div className={styles.descriptions} >
                <p className={styles.MakePrice} >
                    <span >{nameCar}</span >
                    <span >от 32 000$</span >
                </p >
                <p className={styles.description} >
                    <span className={styles.about} >Модельный год</span >
                    <span className={styles.result} >2085</span >
                </p >
                <p className={styles.description} >
                    <span className={styles.about} >Объем двигателя</span >
                    <span className={styles.result} >3200</span >
                </p >
                <p className={styles.description} >
                    <span className={styles.about} >Средний расход</span >
                    <span className={styles.result} >9л / 100км</span >
                </p >
            </div >
            <div className={styles.border} />
            <button className={styles.button} >Подберите мне авто</button >
        </div >
    )
}