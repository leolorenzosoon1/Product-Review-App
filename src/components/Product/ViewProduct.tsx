import React from 'react' 
import {iProduct} from '../../types'
import { ImageComponent, NewReview} from '../'
import styles from './ViewProduct.module.css'
import { useLocation } from 'react-router-dom'

interface iViewProductProps{
    // product: iProduct
}


const ViewProduct:React.FC<iViewProductProps> = ({}) => {
  const location = useLocation()
  const { product } = location.state

  console.log(product,'product @ viewProduct')

    const {name, details, currency, price, image, reviews = [] } = product


    return(
    <>
      <div className={styles.container}>
      
      <div className={styles.item}>
        <ImageComponent src={image}/>
      </div>
    
      <div className={styles.itemDescription}>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>


      
    </div>

    <div>
    <NewReview product={product}/>
    </div>
    
  </>)

}


export default ViewProduct