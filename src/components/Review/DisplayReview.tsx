import React from 'react'
import { iReview } from '../../types'

interface iDisplayReviewProps{
    review: iReview
}

const DisplayReview:React.FC<iDisplayReviewProps> = ({review}) => {
    const {name, email, title, content, rating, likes} = review
return(
    <>
    <h1>{title}</h1>
    <p>{content}</p>
    <p>{rating}</p>
    <p>{name}</p>
    <p>{likes}</p>


    </>
)

}


export default DisplayReview 