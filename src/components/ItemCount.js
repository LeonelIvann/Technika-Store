import React from "react"
import { useState } from "react";
import './ItemCount.scss'


function ItemCount({ stock, initial}) {

    const [counter, setCounter] = useState(initial)
    
    const handleClick = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    } 
    const restClick = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }
    const onAdd = () => {
        if (counter === 0) {
            console.log("No hay productos agregados")
        } else {
            console.log("Agregaste"+" "+ counter+" productos")
            setCounter(1)
        }
    }
    const enviarDatos = (event) => {
        event.preventDefault()
    }

    console.log(counter)

    return (
        <div className="container-amount">
                <div className="amount-div">
                    <button className="buttonAmount button-add" onClick={restClick}>
                        <span className="material-icons">remove</span>
                    </button>
                    <h4 className="counter-amount">{counter}</h4>
                    <button className="buttonAmount button-add" onClick={handleClick}>
                        <span className="material-icons">add</span>
                    </button>
                </div>
                <div className="buy-div">
                    <form className ="form-Card" onSubmit={enviarDatos}>     
                    <p id="stock">{stock} (disponibles) </p>
                        <p id="price">$ 1800</p>
                        <button className ="button-buy" onClick={onAdd}>
                            <span className ="material-icons span-buy">add_shopping_cart</span>
                        </button>
                    </form>
                </div>
        </div>
    );
}

export default ItemCount