import React from "react"
import { useState, useContext } from "react";
import { contexto } from "./MiProvider";
import { toast, ToastContainer } from "react-toastify";

import Carrito from "./Carrito";
import './scss/Contador.scss'

function Contador({stock, initial}) {

    

    const [count, setCount] = useState(initial);
    const resultado = useContext(contexto);

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
    const addClick = () => {
        if (count === 0) {
            toast.error("Debe agregar al menos un producto");
        } else {
            toast.success(`${count} producto(s) agregado(s)`);
            resultado.agregarProducto(resultado.producto, count);
            setCount(0);
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
                        <button className ="button-buy" onClick={addClick}>
                            COMPRAR
                        </button>
                </div>
        </div>
    );
}

export default Contador