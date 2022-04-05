import { useContext } from "react";
import { contexto } from "./MiProvider";
import { toast } from "react-toastify";
import React, { useState } from "react";

import "../components/scss/Carrito.scss";
import { Link } from "react-router-dom";

export const Carrito = (productos) => {

    const carrito = useContext(contexto).carrito;
    const { total } = useContext(contexto);
    const { eliminarProducto, precioTotal, limpiarCarrito } = useContext(contexto);

    const handlePagar = () => {
        toast.success("Completa la siguiente información para generar el pedido");
        handlePayment();
    }

    const p = carrito.map((productos) => productos.id);
    const [modalActive, setModalActive] = useState(false);

    const handlePayment = () => {
        setModalActive(!modalActive);
        if (!modalActive) {
            document.getElementById("modalContainer").classList.add("modalContainerActive");
            document.getElementById("modalContainer").classList.remove("modalContainerDisable");
            document.getElementById("btnClear").classList.add("btnClearActive");
            document.getElementById("btnCancelForm").classList.add("btnCancelActive");
            document.getElementById("cartUl").classList.add("cartUlDisable");
            document.getElementById("btnPayment").classList.add("btnPaymentDisable");
            document.getElementById("btnSubmit").classList.remove("btnSubmitDisable");
            console.log(modalActive)
        } else if (modalActive) {
            document.getElementById("modalContainer").classList.remove("modalContainerActive");
            document.getElementById("modalContainer").classList.add("modalContainerDisable");
            document.getElementById("btnClear").classList.remove("btnClearActive");
            document.getElementById("btnCancelForm").classList.remove("btnCancelActive");
            document.getElementById("cartUl").classList.remove("cartUlDisable");
            document.getElementById("btnPayment").classList.remove("btnPaymentDisable");
            console.log(modalActive)
        }
    }

    console.log(p)
    if (carrito.length === 0) {
        return (
            <div className="carrito-message">
                <h1>No hay productos agregados</h1>
                <Link to="/">
                    {" "}
                    <button className="btnStyleUniversal">
                        <h1>BACK TO FUTURE!</h1>{" "}
                    </button>
                </Link>
            </div>
        );
    }
    return (
        <>
            <article className="carrito-productos-container">
                <div className="carrito-container">
                    <h2>COMPRAS</h2>
                    <div className="totalGastado">
                            <p>{total.length}</p>
                            <span className="material-icons">attach_money</span>
                            <p>Llevas un total de </p>
                    </div>
                </div>
                <div className="carrito-ulContainer" id="cartUl">
                    {carrito.map((productos, id) => (
                        <ul className="carrito-ul" key={productos.productos.id}>
                            <li className="li-carrito">
                                <div className="container-img-carrito">
                                    <img src={productos.productos.img} alt={productos.productos.nombre} />
                                </div>
                                <div className="box-1">
                                    <p className="cart-prodName">{productos.productos.nombre}</p>
                                    <p className="cart-prodName2">El total qué pagarás es de <strong>{productos.productos.precio * productos.cantidad}</strong> por <strong>{productos.cantidad}</strong> producto</p>
                                </div>
                                <div className="box-cart">
                                    <button onClick={() => eliminarProducto(productos.id)} className="btnStyleUniversal">
                                        QUITAR
                                    </button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
                <article id="modalContainer" className="modalContainerDisable">
                    <div className="modal-container">
                        <div className="modal-content">
                            <div className="modal-header">
                            </div>
                            <p>rellene todo los campos con sus datos</p>
                            <div className="modal-body">
                                <div className="content-input">
                                    <label htmlFor="inp-Nombre">Nombre</label>
                                    <input type="text" placeholder="Nombre" id="inp-Nombre"/>
                                </div>
                                <div className="content-input">
                                    <label htmlFor="inp-Apellido">Apellido</label>
                                    <input type="text" placeholder="Apellido" id="inp-Apellido"/>
                                </div>
                                <div className="content-input">
                                    <label htmlFor="inp-Email">Correo Electronico</label>
                                    <input type="email" placeholder="Correo Electronico" id="inp-Email"/>
                                </div>
                                <p> {total} </p>
                            </div>
                            <div className="modal-footer">
                                
                            </div>
                        </div>
                    </div>
                </article>
                <div className="carrito-detalles" id="carrito-detalles">
                    <button onClick={limpiarCarrito} id="btnClear" className="btnStyleUniversal">VACIAR</button>
                    <button onClick={limpiarCarrito} id="btnCancelForm" className="btnStyleUniversal">BOTÓN DE ARREPENTIMIENTO</button>
                    <button onClick={handlePagar} id="btnPayment" className="btnStyleUniversal"> TERMINAR DE COMPRAR </button>
                    <button  id="btnSubmit" className="btnStyleUniversal btnSubmitDisable"> ENVIAR </button>
                </div>
            </article>
        </>
    )
}


export default Carrito
