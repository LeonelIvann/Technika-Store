import { useContext } from "react";
import { contexto } from "./MiProvider";
import { toast } from "react-toastify";

import "../components/scss/Carrito.scss";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, eliminarProducto } = useContext(contexto);

    const handlePagar = () => {
        toast.success("Gracias por su compra");
    }

    if (carrito.length === 0) {
        return (
            <div className="carrito-message">
                <h1>No hay productos agregados</h1>
                <Link to="/"> <h1>volver</h1> </Link>
            </div>
        )
    }

    console.log(carrito)

    return (
        <>
            <article className="carrito-productos-container">
                <div className="carrito-container">
                    <h2>Carrito</h2>
                </div>
                {
                    carrito.map(producto => (
                        <ul className="carrito-ul">

                            <li key={producto.id} className="li-carrito">
                                <div className="container-img-carrito">
                                    <img src={producto.img} />
                                </div>
                                <p>{producto.nombre}</p>
                                <p>${producto.precio}</p>
                                <button onClick={() => eliminarProducto(producto.id)}>X</button>
                            </li>
                        </ul>
                    ))
                }
                <div className="carrito-detalles">
                <p> Subtotal ${carrito.reduce((total, producto) => total + producto.precio, 0)}</p>
                <button onClick={handlePagar}> PAGAR </button>
            </div>
            </article>
        </>
    );
}

export default Carrito;