import React from 'react'
import classes from './ProductList.module.css'
import { product } from '../../../Redux/Product/product'
function ProductList() {

    const eachproduct = product.GTS.map(items => {
        return (
            <div key={ items.product_id } className={classes.ProductList}>
                <div>
                    <div className={classes.items}>
                        <div>
                            <img  className={ classes.category_image } src={items.category.category_image} />
                            <h2  > {items.category.category_name} </h2>
                             { console.log( items.product_price.product_price )}
                             <p> {items.product_price.product_price} </p>
                        </div>
                        <img  className={ classes.service_image } src={items.service.service_image} />
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.products}>
            <h1 style={{ textAlign: 'start' }}>Recomended </h1>
            {eachproduct}
        </div>
    )
}

export default ProductList
