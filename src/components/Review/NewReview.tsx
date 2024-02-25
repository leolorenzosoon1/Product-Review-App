import React, {useState} from 'react'
import { ModalWrapper, ReviewForm } from '../'
import { Link } from 'react-router-dom'
import {iProduct} from '../../types'

interface iNewReviewProps{
    product:iProduct
}
const NewReview:React.FC<iNewReviewProps> = ({product}) => {

    const [showReviewForm, setShowReviewForm] = useState<Boolean>(false);


    function handleShowReviewForm(){
        setShowReviewForm(e => !e)
    }


return(

 showReviewForm ? 
 <ModalWrapper>
    <ReviewForm 
        showReviewForm={showReviewForm} 
        setShowReviewForm={setShowReviewForm}
        product={product}
    /> 
 </ModalWrapper>   
    : 
   <div>
     <button
        onClick={handleShowReviewForm}
        style={{
        padding: '10px 20px',
        fontSize: '18px',
        display: 'block',
        margin: '15px auto',
        }}>
        New Review
    </button>
    </div>


)

}


export default NewReview