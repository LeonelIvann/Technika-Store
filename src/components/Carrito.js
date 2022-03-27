import { useContext } from "react";
import { contexto } from "./MiProvider";
import { toast } from "react-toastify";

import "../components/scss/Carrito.scss";

const Carrito = () => {

    const { carrito, eliminarProducto } = useContext(contexto);

    const handlePagar = () => {
        toast.success("Gracias por su compra");
    }

    return (
        <>
            <div className="carrito-container">
            <h2>Carrito</h2>
            </div>
            <article className="carrito-productos-container">
            {
                carrito.map(producto => (
                    <ul className="carrito-ul">

                        <li key={producto.id} className="li-carrito">
                            <div className="container-img-carrito">
                                <img src={producto.imagen}/>
                            </div>
                            <p>{producto.nombre}</p>
                            <p>{producto.precio}</p>
                            <button onClick={() => eliminarProducto(producto.id)}>Quitar</button>
                        </li>
                    </ul>
                ))
            }
            </article>
            <div className="carrito-detalles">
                <p> Subtotal {carrito.reduce((total, producto) => total + producto.precio, 0)}</p>
                <button onClick={handlePagar}> PAGAR </button>
            </div>
        </>
    );
}

export default Carrito;