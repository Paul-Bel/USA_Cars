import styles from './RepresentativesCard.module.scss'

import {Representative} from "./Representative/Representative";
import {ContactCards} from "../../../../components/ContactCards/ContactCards";
import {useState} from "react";

type CountryInfo = { dealers: { firstContacts: string, secondContacts: string }[] }

type Country = {
    countryName: string,
    countryInfo: CountryInfo[]
}

type RepresentativesCardProps = {
    representative: Array<Country>
}

export const RepresentativesCard: React.FC<RepresentativesCardProps> = ({representative}) => {

    const [representativeContacts, setRepresentativeContacts] = useState<Array<CountryInfo>>(representative[0].countryInfo)
    return (
        <div className={styles.RepresentativesCardContainer} >
            <div className={styles.RepresentativeContainer} >{representative.map((el, i) => {
                return (
                    <Representative
                        key={i}
                        title={el.countryName} />
                )
            })}</div >
            <div className={styles.infoContainer} >
                {representativeContacts.map(el => {
                    return (
                        el.dealers.map((el, i) => {
                            return (
                                <ContactCards
                                    key={i}
                                    firstContact={el.firstContacts}
                                    secondContact={el.secondContacts}
                                    icon={i}
                                    boxShadow={{boxShadow: 'none'}} />
                            )
                        })
                    )
                })}
            </div >
        </div >
    )
}