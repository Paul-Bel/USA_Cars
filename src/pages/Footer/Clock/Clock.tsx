import {FC, useEffect, useState} from "react";

interface ClockProps {
    city: string
    timezone: number
}

export const Clock: FC<ClockProps> = ({city, timezone}) => {
    let data = new Date()

    const [time, setTime] = useState(
        [data.getUTCHours() + timezone, data.getUTCMinutes()])

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime([data.getUTCHours() + timezone, data.getUTCMinutes()])
        }, 5000)
        return () => clearInterval(intervalId)
    }, [time])
    console.log(time[1], typeof time[1])

    return (
        <div >
            <span >{city}: </span >
            <span >{time[0]}</span >
            <span >:</span >
            <span >{time[1]<10 ? '0' + time[1].toString() : time[1]} </span >
        </div >
    )
}