import React from 'react'
import cart from './cart.png'
import classes from './Cart.module.css'
function Cart() {
    return (
        <div className={ classes.Cart}>
             <h1> cart</h1>
             <img  src={cart} /> 
             <p>
             Good food is always cooking!
             <p> Go ahead, order some yummy items from the menu. </p>
             </p>
        </div>
    )
}

export default Cart
