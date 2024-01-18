import styles from "./Representatives.module.scss"

import {RepresentativesCard} from "./RepresentativeCard/RepresentativesCard";
import {representative} from "../../../common/variablesData/representatives";

const representativeData = representative

export const Representatives = () => {

    return (
        <div className={styles.RepresentativesContainer}>
            <h3 className={styles.title}>Представители</h3 >
            <RepresentativesCard  representative={representativeData}/>
        </div >
    )
}