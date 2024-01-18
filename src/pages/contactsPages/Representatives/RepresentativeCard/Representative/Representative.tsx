import styles from "./Representativ.module.scss"

type RepresentativePropsType = { title: string }

export const Representative: React.FC<RepresentativePropsType> = ({title}) => {

    return (
        <div className={styles.RepresentativeContainer} >
            <button className={styles.titleContainer} >
                {title}
            </button >
        </div >
    )
}