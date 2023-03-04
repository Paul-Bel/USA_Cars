import {FC} from "react";

import styles from './ButtonCall.module.scss'

interface PropsType {
    title: string
    className?: string
}

export const ButtonCall: FC<PropsType> = ({title, className}) => {

    return(
        <button className={className ? className : styles.button} >{title}</button >
    )
}