import React, { useState } from 'react'
import { ModalWrapper, StarRating } from '../'
import styles from './ReviewForm.module.css'
import { iProduct } from '../../types'
import axios from 'axios'
interface iReviewFormProps {
  showReviewForm: Boolean;
  setShowReviewForm: React.Dispatch<React.SetStateAction<Boolean>>;
  product: iProduct
}

const ReviewForm: React.FC<iReviewFormProps> = ({ setShowReviewForm, product }) => {
  const [formData, setFormData] = useState({ title: '', content: '', name: '', email: '', rating: 0 })

  const handleRatingChange = (newValue: number) => {
    setFormData(e => ({ ...e, rating: newValue }))
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setFormData(prevState => ({ ...prevState, [id]: value }));

  };




  const handleSubmit = async (e: React.FormEvent) => {
    const { categoryId, id: productId } = product
    e.preventDefault();
    const response = await axios.post(`https://5ffbed0e63ea2f0017bdb67d.mockapi.io/categories/${categoryId}/products/${productId}/reviews`, formData)
    console.log('submit response:',response.data)
    setShowReviewForm(false)
  };

  return (
    <ModalWrapper>
      <form onSubmit={handleSubmit} className={styles.myForm}>
        <h1>
          Rating <StarRating value={formData.rating} onChange={handleRatingChange} />
        </h1>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className={styles.formInput}
        />

        <input
          id="content"
          type="text"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          className={styles.formInput}
        />

        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className={styles.formInput}
        />
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={styles.formInput}
        />
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
        <button type="submit" className={styles.formCancel}
          onClick={() => setShowReviewForm(false)}
        >
          Cancel
        </button>
      </form>
    </ModalWrapper>
  )
}


export default ReviewForm