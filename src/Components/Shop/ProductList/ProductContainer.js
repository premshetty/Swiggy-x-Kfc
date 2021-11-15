import React from 'react'
import classes from './ProductContainer.module.css'
import Cart from './Cart'
import ProductList from './ProductList'
import Recomended from './Recomended'

function ProductContainer() {
    return (
        <div  className ={ classes.ProductContainer}>
            <Recomended />
            <ProductList />
            <Cart />
        </div>
    )
}

export default ProductContainer
