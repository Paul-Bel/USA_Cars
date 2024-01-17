import styles from "./Counter.module.scss";
import React, {useState} from "react";
import {ButtonRound} from "../ButtonPaginator/ButtonRound";

type DataType = [string, string, number]
type CounterPropsType = {
    value: Array<string>,
    update: (value: DataType) => void
    color?: string
    countStep: number
}

export const Counter: React.FC<CounterPropsType> = ({value, update, color, countStep}) => {
    const [data, setData] = useState<DataType>([value[0], value[1], countStep])
    const lengthPage = value.length

    const changeCarsUp = () => {
        let count: number = data[2]
        if (data[0] !== value[lengthPage - 2]) {
            count++
            setData([value[count - 2], value[count - 1], count])
        }
        if (data[1] === value[lengthPage - 1]) {
            count++
            setData([value[count - 2], value[0], count])
        }
        if (data[0] === value[lengthPage - 1]) {
            setData([value[0], value[1], 2])
        }

        update(data)
    }
    const changeCarsDown = () => {
        let count = data[2]
        if (data[0] !== value[0]) {
            count--
            setData([value[count - 2], value[count - 1], count])
        }
        if (data[1] === value[0]) {
            setData([value[lengthPage - 2], value[lengthPage - 1], count])
        }
        if (data[0] === value[0]) {
            count = lengthPage - 1
            setData([value[count], value[0], lengthPage + 1])
        }
        update(data)
    }
    return (
        <div className={styles.counterContainer}>
            <ButtonRound callBack={changeCarsDown} arrow={'L'} />
            <span
                style={color ? {color: 'red'} : {}}
                className={styles.count} >
                {data[2] - 1}/{lengthPage }
            </span >
            <ButtonRound callBack={changeCarsUp} arrow={'R'} />
        </div>
    )
}