import React from "react"
import { useState, useContext } from "react";
import { contexto } from "./MiProvider";
import { toast, ToastContainer } from "react-toastify";

import Carrito from "./Carrito";
import './scss/Contador.scss'

export const Contador = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial); 
    
    const sumClick = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    } 
    const restClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="container-amount">
                <div className="amount-div">
                    <button className="buttonAmount button-add" onClick={restClick}>
                        <span className="material-icons">remove</span>
                    </button>
                    <h4 className="counter-amount">{count}</h4>
                    <button className="buttonAmount button-add" onClick={sumClick}>
                        <span className="material-icons">add</span>
                    </button>
                </div>
                <div className="buy-div">
                        <button className ="button-buy" onClick={()=> onAdd(count)}>
                            COMPRAR
                        </button>
                </div>
        </div>
    );
}

export default Contador