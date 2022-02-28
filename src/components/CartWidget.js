import React from 'react'
import './CartWidget.scss'

function CartWidget() {
    return (
        <button className="material-icons cart">
            shopping_cart
            <p id="cant-buy" >0</p>
        </button>
    )
}

export default CartWidget