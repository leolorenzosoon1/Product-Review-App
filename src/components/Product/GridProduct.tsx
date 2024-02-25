import React from 'react'
import {iProduct} from '../../types'
import styles from './GridProduct.module.css'
import imgNA from './imgNA.png'
import { Link } from 'react-router-dom';
import { ImageComponent} from '../'

interface iProductProps{
    product: iProduct
}
const GridProduct:React.FC<iProductProps> = ({product})=> {
    const {name, image, category, price, currency, details, dateCreated} = product
    console.log('product',product)
return(
<Link to={{ pathname: '/viewProduct'}} state={{ product}} className={styles.link}>
<div className={styles.item} onClick={(e) => {console.log('Clicked product', product)}}>
        <ImageComponent src={image} width={"200"} height={"150"}/>
   <p>{name}</p>
   <p>{`${price} ${currency}`}</p>


   
</div> 

</Link>
)

}


export default GridProduct