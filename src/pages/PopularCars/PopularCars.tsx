import {ButtonRound} from "../../components/ButtonRound";

import Tesla from '../../common/img/makeCars/Tesla.png'
import Lexus from '../../common/img/makeCars/Lexus.png'
import Toyota from '../../common/img/makeCars/Toyota.png'
import Ford from '../../common/img/makeCars/Ford.png'
import Honda from '../../common/img/makeCars/Honda.png'

import CardCar1 from '../../common/img/carsForCard/1.png'
import CardCar2 from '../../common/img/carsForCard/2.png'
import CardCar3 from '../../common/img/carsForCard/3.png'
import CardCar4 from '../../common/img/carsForCard/4.png'
import CardCar5 from '../../common/img/carsForCard/5.png'

import styles from './PopularCars.module.scss'
import {CardCar} from "./CardCar/CardCar";


const chooseCars = [
    {name: 'Jeep Cherokee'},
    {name: 'Ford Explorer'},
    {name: 'Tesla Model X'},
    {name: 'Honda Accord 2075'},
]

export const PopularCars = () => {

    return (
        <div className={styles.PopularCarsContainer} >
            <span className={styles.headerContainer} >
            <div className={styles.lineDescr} />
            <div className={styles.headerPage} >Популярные авто из США</div >
            <div className={styles.lineDescr} />
            </span >
            <div className={styles.brandsGroup} >
                <ButtonRound
                    callBack={() => {
                    }} arrow={'L'} />
                <img src={Tesla} className={styles.img} alt="make" />
                <img src={Lexus} className={styles.img} alt="make" />
                <img src={Toyota} className={styles.img} alt="make" />
                <img src={Ford} className={styles.img} alt="make" />
                <img src={Honda} className={styles.img} alt="make" />
                <ButtonRound
                    callBack={() => {
                    }} arrow={'R'} />
            </div >
            <div className={styles.cardContainer} >
                <CardCar
                    nameCar={chooseCars[0].name}
                    imgCar={CardCar2}
                />
                <CardCar
                    nameCar={chooseCars[1].name}
                    imgCar={CardCar1}
                />
                <CardCar
                    nameCar={chooseCars[3].name}
                    imgCar={CardCar3}
                />
                <CardCar
                    nameCar={chooseCars[2].name}
                    imgCar={CardCar4}
                />

            </div >
            <div className={styles.buttonGroup} >
                <ButtonRound
                    callBack={() => {
                    }}
                    arrow={'L'}
                />
                <span
                    className={styles.count} >
                    2/3
                    {/*{cars[2] - 1}/{lengthPage}*/}
                </span >
                <ButtonRound
                    callBack={() => {
                    }}
                    arrow={'R'}
                />
            </div >
        </div >
    )
}