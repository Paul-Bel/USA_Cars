import styles from './MainCars.module.scss'

import Tesla from '../../../../common/img/cars/6.png'
import DodgeRam from '../../../../common/img/cars/8.png'
import Porsche from '../../../../common/img/cars/1.png'
import Jeep from '../../../../common/img/cars/2.png'
import Ford from '../../../../common/img/cars/3.png'
import RAM from '../../../../common/img/cars/5.png'

import {useState} from "react";
import {Counter} from "../../../../components/Counter/Counter";

type DataType = [string, string, number]

const imgCars: Array<string> = [Tesla, DodgeRam, Porsche, Jeep, Ford, RAM]

export const MainCars = () => {

    const [cars, setCars] = useState<DataType>([imgCars[0], imgCars[1], 2])

    const update = (value: DataType) => setCars(value)


    return (
        <div className={styles.carsMain} >
            <div
                className={styles.img + ' ' + styles.mobileImgFirst}
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
                    <Counter
                        value={imgCars}
                        update={update}
                        countStep={2}
                    />
                </div >
            </div >
        </div >

    )
}