import React from 'react'
import { ImageComponent, NewReview } from '../'
import styles from './ViewProduct.module.css'
import { useLocation } from 'react-router-dom'

interface iViewProductProps {
}


const ViewProduct: React.FC<iViewProductProps> = () => {
  const location = useLocation()
  const { product } = location.state
  const { name, details, currency, price, image } = product


  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <ImageComponent src={image} />
        </div>
        <div className={styles.itemDescription}>
          <h2>{name}</h2>
          <p>{`${price} ${currency}`}</p>
          <p>{details}</p>
        </div>
      </div>
      <div>
        <NewReview product={product} />
      </div>

    </>)

}


export default ViewProduct