import styles from './ButtonRound.module.scss'
import Ar_L from '../../common/img/arrow/Arrow_L.png'
import Ar_R from '../../common/img/arrow/Arrow_R.png'
type ButtonRoundPropsType = {
    callBack: () => void
    arrow: 'R' | 'L'
    className?: string
}

export const ButtonRound = (props: ButtonRoundPropsType) => {
    const {callBack, arrow, className} = props
    return (

        <button
            className={className ? className : styles.button}
            style={arrow === 'R'
                ? {backgroundImage: `url(${Ar_R})`}
                : {backgroundImage: `url(${Ar_L})`}}
            onClick={callBack}

        />
    )
}