import styles from './ContactCloks.module.scss'

import {Clock} from "../../../components/Clock/Clock";
import {timeInfo} from "../../../common/variablesData/timeInfo";


let timeData: Array<{ city: string, timezone: number }> = timeInfo

export const ContactClocks = () => {

    return (
        <div className={styles.clockContainer} >
            <div className={styles.clock} >
                {timeData.map((el, i) => {
                    return (
                            <Clock
                                key={i}
                                city={el.city}
                                timezone={el.timezone}
                                orient={true}/>
                    )
                })}
            </div >
        </div >
    )
}