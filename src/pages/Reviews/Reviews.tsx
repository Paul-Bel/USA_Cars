import {ButtonRound} from "../../components/ButtonPaginator/ButtonRound";

import Reviews1 from '../../common/img/Reviews/Reviews1.png'
import Reviews2 from '../../common/img/Reviews/Reviews2.png'
import Reviews3 from '../../common/img/Reviews/Reviews3.png'
import Reviews4 from '../../common/img/Reviews/Reviews4.png'

import styles from './Reviews.module.scss'
import {useState} from "react";

type ReviewsTypeData = Array<string>
type ReviewsData = [string, string, string, number]

const reviews: ReviewsTypeData = [Reviews1, Reviews2, Reviews3, Reviews4,]

let lengthPage = reviews.length

export const Reviews = () => {

    const [imageReviews, setImageReviews] = useState<ReviewsData>([
        Reviews1, Reviews2, Reviews3, 1])

    const changeReviewsR = () => {
        let count = imageReviews[3]
        if (imageReviews[2] === reviews[lengthPage - 1]) {
            count++
            setImageReviews([reviews[count - 1], reviews[count], reviews[0], count])
            return
        }
        if (imageReviews[1] === reviews[lengthPage - 1]) {
            count++
            setImageReviews([reviews[lengthPage - 1], reviews[0], reviews[1], count])
            return
        }
        if (imageReviews[0] === reviews[lengthPage - 1]) {
            count = 1
            setImageReviews([reviews[0], reviews[1], reviews[2], count])
            return
        } else {
            count++
            setImageReviews([reviews[count - 1], reviews[count], reviews[count + 1], count])
            return
        }
    }
    const changeReviewsL = () => {
        let count = imageReviews[3]
        if (imageReviews[0] === reviews[0]) {
            count = lengthPage
            setImageReviews([reviews[lengthPage - 1], reviews[0], reviews[1], count])
            return
        }
        if (imageReviews[1] === reviews[0]) {
            count = lengthPage - 1
            setImageReviews([reviews[lengthPage - 2], reviews[lengthPage - 1], reviews[0], count])
            return
        }
        if (imageReviews[2] === reviews[0]) {
            count = lengthPage - 2
            setImageReviews([reviews[lengthPage - 3], reviews[lengthPage - 2], reviews[lengthPage - 1], count])
            return
        } else {
            count--
            setImageReviews([reviews[count - 1], reviews[count], reviews[count + 1], count])
            return
        }
    }

    return (
        <div className={styles.reviewsContainer} >
            <div className={styles.title} >
                <span className={styles.line} />
                <span >Отзывы клиентов</span >
                <span className={styles.line} />
            </div >
            <div className={styles.screens} >
                {imageReviews.map(r =>
                    typeof r === 'string' && <img key={r} src={r} alt="Reviews" />)}
            </div >
            <div className={styles.paginator} >
                <ButtonRound
                    callBack={changeReviewsL}
                    arrow={'L'}
                />
                <span
                    className={styles.count} >
                    {imageReviews[3]}/{lengthPage}
                </span >
                <ButtonRound
                    callBack={changeReviewsR}
                    arrow={'R'}
                />
            </div >
        </div >
    )
}