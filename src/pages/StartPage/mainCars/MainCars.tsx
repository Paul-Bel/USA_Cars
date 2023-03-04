import styles from './MainCars.module.scss'

import Tesla from '../../../common/img/cars/6.png'
import DodgeRam from '../../../common/img/cars/8.png'
import Porsche from '../../../common/img/cars/1.png'
import Jeep from '../../../common/img/cars/2.png'
import Ford from '../../../common/img/cars/3.png'
import RAM from '../../../common/img/cars/5.png'

import {useState} from "react";
import {ButtonRound} from "../../../components/ButtonPaginator/ButtonRound";

type CarsType = [string, string, number]

const imgCars: Array<string> = [Tesla, DodgeRam, Porsche, Jeep, Ford, RAM]

export const MainCars = () => {

    const [cars, setCars] = useState<CarsType>([imgCars[0], imgCars[1], 2])
    const lengthPage = imgCars.length

    const changeCarsUp = () => {
        let count = cars[2]
        if (cars[0] !== imgCars[lengthPage - 2]) {
            count++

            setCars([imgCars[count - 2], imgCars[count - 1], count])
        }
        if (cars[1] === imgCars[lengthPage - 1]) {
            count++
            setCars([imgCars[count - 2], imgCars[0], count])
        }
        if (cars[0] === imgCars[lengthPage - 1]) {
            setCars([imgCars[0], imgCars[1], 2])
        }
    }
    const changeCarsDown = () => {
        let count = cars[2]
        if (cars[0] !== imgCars[0]) {
            count--
            setCars([imgCars[count - 2], imgCars[count - 1], count])
        }
        if (cars[1] === imgCars[0]) {
            setCars([imgCars[lengthPage - 2], imgCars[lengthPage - 1], count])
        }
        if (cars[0] === imgCars[0]) {
            count = lengthPage - 1
            setCars([imgCars[count], imgCars[0], lengthPage + 1])
        }
    }
    return (
        <div className={styles.carsMain} >
            <div
                className={styles.img}
                style={{
                    backgroundImage: `url(${cars[0]})`,
                    top: '-4vh',
                    left: '16vh',
                }
                } />
            <div
                className={styles.img}
                style={{
                    backgroundImage: `url(${cars[1]})`,
                    left: '29vw',
                    top: '-1vh',
                }} >

                <div className={styles.buttonGroup} >
                    <ButtonRound
                        callBack={changeCarsDown}
                        arrow={'L'}
                    />
                    <span className={styles.count} >{cars[2] - 1}/{lengthPage}</span >
                    <ButtonRound
                        callBack={changeCarsUp}
                        arrow={'R'}
                    />
                </div >
            </div >
        </div >

    )
}