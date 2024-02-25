import React from 'react'
import { iProduct } from '../../types'
import styles from './GridProduct.module.css'
import { Link } from 'react-router-dom';
import { ImageComponent } from '../'

interface iProductProps {
    product: iProduct
}
const GridProduct: React.FC<iProductProps> = ({ product }) => {
    const { name, image, categoryName, price, currency } = product
    return (
        <Link to={{ pathname: '/viewProduct' }} state={{ product }} className={styles.link}>
            <div className={styles.item}>
                <ImageComponent src={image} width={"200"} height={"150"} />
                <p>{name}</p>
                <p>{`${price} ${currency}`}</p>
                <p>{`category: ${categoryName}`}</p>
            </div>

        </Link>
    )

}


export default GridProduct