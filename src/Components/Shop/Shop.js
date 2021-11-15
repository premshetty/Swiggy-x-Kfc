import React from 'react'
import { shop } from '../../Redux/shop'
import Filter from './Filter/Filter'
import ProductContainer from './ProductList/ProductContainer'
import ProductList from './ProductList/ProductList'
import classes from './Shop.module.css'
import ShopDetails from './ShopDetails'
function Shop() {
    return (
        <div>
            <div className={classes.shopHeader}>
                <div className={classes.logoContainer} >
                    <img className={classes.logo} src={shop.GTS.shop_image} />
                </div>
                <ShopDetails />
            </div>
            <div >
                <Filter />
                <ProductContainer />
            </div>
        </div>
    )
}

export default Shop
