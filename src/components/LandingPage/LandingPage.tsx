import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { iCategory, iProduct } from '../../types'
import { GridProduct, FilterRadio } from '../'

import styles from './LandingPage.module.css'
import { SearchContext, FilterContext } from '../../'
// import Product from './Product/Product'


const LandingPage = () => {
    const { search } = useContext(SearchContext)
    const { filter: categoryFilter } = useContext(FilterContext)

    const categories: iCategory[] = useLoaderData() as iCategory[];

    const products = categories.map((category) => {
        const { name, products } = category
        const newProducts = products.map(prod => ({ ...prod, categoryName: name }))
            .filter(e => (e.name.toLowerCase().includes(search.toLowerCase()) || e.details.toLowerCase().includes(search.toLowerCase())))
        return (newProducts)
    }).flatMap(e => e) as iProduct[]


    const productCategories = products.map(e => e.categoryName)

    const filteredProducts = categoryFilter.length ? products.filter(e => categoryFilter.includes(e.categoryName || '')) : products
    const categoryProps = search ? categories.filter(e => productCategories.includes(e.name))
        : categories

    return (<div className={styles.mainContainer}>
        <div className={styles.leftChild}>
            <FilterRadio categories={categoryProps} />
        </div>
        <div className={styles.rightChild}>
            {filteredProducts.map(product => {
                return <div key={`${product.id}_${product.categoryId}`}>
                <GridProduct product={product} /></div>
            })
            }
        </div>





    </div>)


}


export default LandingPage