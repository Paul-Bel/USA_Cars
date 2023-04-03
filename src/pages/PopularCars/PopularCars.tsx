import {ButtonRound} from "../../components/ButtonPaginator/ButtonRound";

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
type StateType = [
    { name: string, img: string },
    { name: string, img: string },
    { name: string, img: string },
    { name: string, img: string },
    number,
]

const chooseCars: PopularCarsType = [
    {name: 'Honda Accord 2075', img: CardCar1},
    {name: 'Jeep Cherokee', img: CardCar2},
    {name: 'Ford Explorer', img: CardCar3},
    {name: 'Tesla Model X', img: CardCar4},
    {name: 'Jeep Cherokee++', img: CardCar5},
]

let lengthPage = chooseCars.length

export const PopularCars = () => {

    const [imgCar, setImgCar] = useState<StateType>([
        {name: chooseCars[0].name, img: chooseCars[0].img},
        {name: chooseCars[1].name, img: chooseCars[1].img},
        {name: chooseCars[2].name, img: chooseCars[2].img},
        {name: chooseCars[3].name, img: chooseCars[3].img},
        1
    ])

    const changeReviewsR = () => {
        let count = imgCar[4]
        if (imgCar[3].img === chooseCars[lengthPage - 1].img) {
            count++
            setImgCar([
                {name: chooseCars[lengthPage - 3].name, img: chooseCars[lengthPage - 3].img},
                {name: chooseCars[lengthPage - 2].name, img: chooseCars[lengthPage - 2].img},
                {name: chooseCars[lengthPage - 1].name, img: chooseCars[lengthPage - 1].img},
                {name: chooseCars[0].name, img: chooseCars[0].img},
                count])
            return
        }
        if (imgCar[3].img === chooseCars[0].img) {
            count++
            setImgCar([
                {name: chooseCars[lengthPage - 2].name, img: chooseCars[lengthPage - 2].img},
                {name: chooseCars[lengthPage - 1].name, img: chooseCars[lengthPage - 1].img},
                {name: chooseCars[0].name, img: chooseCars[0].img},
                {name: chooseCars[1].name, img: chooseCars[1].img},
                count])
            return
        }
        if (imgCar[3].img === chooseCars[1].img) {
            count++
            setImgCar([
                {name: chooseCars[lengthPage - 1].name, img: chooseCars[lengthPage - 1].img},
                {name: chooseCars[0].name, img: chooseCars[0].img},
                {name: chooseCars[1].name, img: chooseCars[1].img},
                {name: chooseCars[2].name, img: chooseCars[2].img},
                count])
            return
        }
        if (imgCar[3].img === chooseCars[2].img) {
            count = 1
            setImgCar([
                {name: chooseCars[0].name, img: chooseCars[0].img},
                {name: chooseCars[1].name, img: chooseCars[1].img},
                {name: chooseCars[2].name, img: chooseCars[2].img},
                {name: chooseCars[3].name, img: chooseCars[3].img},
                count])
            return
        }
        else {
            count ++
            setImgCar([
                {name: chooseCars[count -1].name, img: chooseCars[count - 1].img},
                {name: chooseCars[count].name, img: chooseCars[count].img},
                {name: chooseCars[count + 1].name, img: chooseCars[count + 1].img},
                {name: chooseCars[count + 2].name, img: chooseCars[count + 2].img},
                count])
            return
        }
    }
    const changeReviewsL = () => {
        let count = imgCar[4]
        if (imgCar[0].img === chooseCars[0].img) {
            count = lengthPage
            setImgCar([
                {name: chooseCars[lengthPage - 1].name, img: chooseCars[lengthPage - 1].img},
                {name: chooseCars[0].name, img: chooseCars[0].img},
                {name: chooseCars[1].name, img: chooseCars[1].img},
                {name: chooseCars[2].name, img: chooseCars[2].img},
                count])
            return
        }
        if (imgCar[0].img === chooseCars[lengthPage-1].img) {
            count--
            setImgCar([
                {name: chooseCars[lengthPage - 2].name, img: chooseCars[lengthPage - 2].img},
                {name: chooseCars[lengthPage - 1].name, img: chooseCars[lengthPage - 1].img},
                {name: chooseCars[0].name, img: chooseCars[0].img},
                {name: chooseCars[1].name, img: chooseCars[1].img},
                count])
            return
        }
        if (imgCar[0].img === chooseCars[lengthPage-2].img) {
            count--
            setImgCar([
                {name: chooseCars[lengthPage - 3].name, img: chooseCars[lengthPage - 3].img},
                {name: chooseCars[lengthPage - 2].name, img: chooseCars[lengthPage - 2].img},
                {name: chooseCars[lengthPage - 1].name, img: chooseCars[lengthPage - 1].img},
                {name: chooseCars[0].name, img: chooseCars[0].img},
                count])
            return
        }
        if (imgCar[0].img === chooseCars[lengthPage-3].img) {
            count --
            setImgCar([
                {name: chooseCars[lengthPage - 4].name, img: chooseCars[lengthPage - 4].img},
                {name: chooseCars[lengthPage - 3].name, img: chooseCars[lengthPage - 3].img},
                {name: chooseCars[lengthPage - 2].name, img: chooseCars[lengthPage - 2].img},
                {name: chooseCars[lengthPage - 1].name, img: chooseCars[lengthPage - 1].img},
                count])
            return
        }
        else {
            count --
            setImgCar([
                {name: chooseCars[count -1].name, img: chooseCars[count - 1].img},
                {name: chooseCars[count].name, img: chooseCars[count].img},
                {name: chooseCars[count + 1].name, img: chooseCars[count + 1].img},
                {name: chooseCars[count + 2].name, img: chooseCars[count + 2].img},
                count])
            return
        }
    }

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
                {imgCar.map((car, i) => {
                    if (typeof car !== 'number') {
                        return (
                            <CardCar
                                key={i}
                                nameCar={car.name}
                                imgCar={car.img}
                            />
                        )
                    }
                })}
            </div >
            <div className={styles.buttonGroup} >
                <ButtonRound
                    callBack={changeReviewsL}
                    arrow={'L'}
                />
                <span
                    className={styles.count} >
                    {imgCar[4]}/{lengthPage}
                </span >
                <ButtonRound
                    callBack={changeReviewsR}
                    arrow={'R'}
                />
            </div >
        </div >
    )
}