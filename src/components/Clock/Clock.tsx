import {FC, useEffect, useState} from "react";
import styles from "./Clock.module.scss"

interface ClockProps {
    city: string
    timezone: number
    orient?: boolean
}

export const Clock: FC<ClockProps> = ({city, timezone, orient}) => {
    let data = new Date()

    const [time, setTime] = useState(
        [data.getUTCHours() + timezone, data.getUTCMinutes()])

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime([data.getUTCHours() + timezone, data.getUTCMinutes()])
        }, 5000)
        return () => clearInterval(intervalId)
    }, [time])

    return (
        <div >
            <span className={orient ? styles.secondCityStyle: styles.cityStyle} >
                {city}{!orient && <span >: </span >}
            </span >
            <span className={orient ? styles.secondClockStyle : styles.clockStyle} >
                <span >{time[0] < 24 ? time[0] : time[0] - 24}</span >
                <span >:</span >
                <span >{time[1] < 10 ? '0' + time[1].toString() : time[1]} </span >
            </span >
        </div >
    )
}