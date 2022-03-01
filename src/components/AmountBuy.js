import React from "react"
import { useState } from "react";
import './AmountBuy.scss'


function AmountBuy(props) {

    const [counter, setCounter] = useState(props.initial)

    const handleClick = () => {
        setCounter(counter + 1);
    }
    const restClick = () => {
        setCounter(counter - 1);
    }
    const resetClick = () => {
        setCounter(0);
    }

    return (
        <div className="container-amount">
                <div className="amount-div">
                    <button className="buttonAmount button-add">
                        <span className="material-icons" onClick={restClick}>remove</span>
                    </button>
                    <h4 className="counter-amount">{counter}</h4>
                    <button className="buttonAmount button-add" onClick={handleClick}>
                        <span className="material-icons">add</span>
                    </button>
                </div>
                <div className="buy-div">
                    <form className ="form-Card">
                        <p id="price">$ 1800</p>
                        <button className ="button-buy" onClick={resetClick}>
                            <span className ="material-icons span-buy">add_shopping_cart</span>
                        </button>
                    </form>
                </div>
        </div>
    );
}

export default AmountBuy