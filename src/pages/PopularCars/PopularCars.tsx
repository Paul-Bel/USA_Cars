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
import {useState} from "react";

type PopularCarsType = Array<{ name: string, img: string }>
type StateType = [string, string, string, string, number]

const chooseCars: PopularCarsType = [
    {name: 'Jeep Cherokee', img: CardCar1},
    {name: 'Ford Explorer', img: CardCar2},
    {name: 'Tesla Model X', img: CardCar3},
    {name: 'Honda Accord 2075', img: CardCar4},
    {name: 'Honda Accord 2075', img: CardCar5},
]

let lengthPage = chooseCars.length

export const PopularCars = () => {

    const [imgCar, setImgCar] = useState<StateType>([
        chooseCars[0].img, chooseCars[1].img, chooseCars[2].img, chooseCars[3].img, 1])

    const changeReviewsR = () => {
        let count = imgCar[4]
        if (imgCar[3] === chooseCars[lengthPage - 1].img) {
            count++
            setImgCar([chooseCars[lengthPage - 3].img, chooseCars[lengthPage - 2].img, chooseCars[lengthPage - 1].img, chooseCars[0].img, count])
            return
        }
        if (imgCar[3] === chooseCars[0].img) {
            count = 1
            setImgCar([chooseCars[0].img, chooseCars[count].img, chooseCars[lengthPage - 2].img, chooseCars[lengthPage - 1].img, count])
            return
        }
        if (imgCar[3] === chooseCars[1].img) {
            count++
            setImgCar([chooseCars[0].img, chooseCars[count].img, chooseCars[count].img, chooseCars[lengthPage - 1].img, count])
            return
        }
    }
    // const changeReviewsL = () => {
    //     let count = imgCar[3]
    //     if (imgCar[0] === chooseCars[0]) {
    //         count = lengthPage
    //         setImgCar([chooseCars[lengthPage - 1], chooseCars[0], chooseCars[1], count])
    //         return
    //     }
    //     if (imgCar[1] === chooseCars[0]) {
    //         count = lengthPage - 1
    //         setImgCar([chooseCars[lengthPage - 2], chooseCars[lengthPage - 1], chooseCars[0], count])
    //         return
    //     }
    //     if (imgCar[2] === chooseCars[0]) {
    //         count = lengthPage - 2
    //         setImgCar([chooseCars[lengthPage - 3], chooseCars[lengthPage - 2], chooseCars[lengthPage - 1], count])
    //         return
    //     } else {
    //         count--
    //         setImgCar([chooseCars[count - 1], chooseCars[count], chooseCars[count + 1], count])
    //         return
    //     }
    // }
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
                {chooseCars.map((car, i) => {
                    return (
                        <CardCar
                            key={i}
                            nameCar={car.name}
                            imgCar={car.img}
                        />
                    )
                })}
                {/*<CardCar*/}
                {/*    nameCar={chooseCars[1].name}*/}
                {/*    imgCar={CardCar1}*/}
                {/*/>*/}
                {/*<CardCar*/}
                {/*    nameCar={chooseCars[3].name}*/}
                {/*    imgCar={CardCar3}*/}
                {/*/>*/}
                {/*<CardCar*/}
                {/*    nameCar={chooseCars[2].name}*/}
                {/*    imgCar={CardCar4}*/}
                {/*/>*/}

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