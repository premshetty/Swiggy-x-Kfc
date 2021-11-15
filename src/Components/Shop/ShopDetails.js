import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar  , faCertificate } from '@fortawesome/free-solid-svg-icons'
import { shop } from '../../Redux/shop'
import classes from './ShopDetails.module.css'
function ShopDetails() {
    const service = shop.status ? 'Restaurant  serviceable' : 'Restaurant Unserviceable';
    const serviceStyle = shop.status ? classes.serviceable : classes.Unserviceable;
    return (
        <div className={classes.ShopDetailsContainer}>
        <div className={classes.ShopDetails}>
            <div className={classes.shopName} >
                <h2> {shop.GTS.shop_name} </h2>
            </div>
            <div >
                <span className={serviceStyle}>{service} </span>
                <span style={{ marginLeft: '10px' }}> {shop.GTS.shop_description}  </span>
            </div>
            <div>
                <p> {shop.GTS.address + ',' +
                    shop.GTS.shop_address + ',' + shop.GTS.area.area_name
                    + ',' + shop.GTS.city.city_name} </p>
            </div>
            <div className={classes.additionalDetailsContainer}>
                <div className={classes.additionalDetails}>
                    <h5> <FontAwesomeIcon icon={faStar} /> &nbsp; { shop.GTS.shop_rating.toString().slice(0, -1) } </h5>
                    <p> 100+ ratings </p>
                </div>
                <div className={classes.additionalDetails}>
                    <h5>{shop.GTS.shop_rating} </h5>
                    <p> 100+ ratings </p>
                </div>
                <div className={classes.additionalDetails}>
                    <h5>{shop.GTS.shop_rating} </h5>
                    <p> 100+ ratings </p>
                </div>
            </div>
        </div>
         <div className ={ classes.offer }>
         <fieldset>
             <legend>OFFER</legend>
             <p> <FontAwesomeIcon icon={faCertificate} /> { shop.GTS.shop_coupon[0].offer_coupon_description} </p>
             <p> { shop.GTS.shop_coupon[1].offer_coupon_description} </p>
         </fieldset>
     </div>
     </div>
    )
}

export default ShopDetails
