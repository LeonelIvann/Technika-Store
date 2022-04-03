import { useContext } from "react";
import { contexto } from "./MiProvider";
import { toast } from "react-toastify";

import "../components/scss/Carrito.scss";
import { Link } from "react-router-dom";

/* const carrito = useContext(contexto).carrito; */

export const Carrito = (productos) => {

    const carrito = useContext(contexto).carrito;
    const { eliminarProducto, precioTotal, limpiarCarrito, prtotal } = useContext(contexto);

    const handlePagar = () => {
        toast.success("Gracias, completa la siguiente información para pagar");
        prompt("Ingresa tu nombre");
    }

    const p = carrito.map((productos) => productos.id);

    const totalGastado = precioTotal;

    console.log(p)
    if (carrito.length === 0) {
        return (
            <div className="carrito-message">
                <h1>No hay productos agregados</h1>
                <Link to="/">
                    {" "}
                    <h1>volver</h1>{" "}
                </Link>
            </div>
        );
    }
    return (
        <>
            <article className="carrito-productos-container">
                <div className="carrito-container">
                    <h2>MIS COMPRAS</h2>
                    <div className="totalGastado">
                        <p> 
                            <span class="material-icons">attach_money</span>
                            {productos.precioTotal}
                        </p>
                    </div>
                </div>
                <div className="carrito-ulContainer">
                {carrito.map((productos, id) => (
                    <ul className="carrito-ul" key={productos.productos.id}>
                        <li className="li-carrito">
                            <div className="container-img-carrito">
                                <img src={productos.productos.img} alt={productos.productos.nombre} />
                            </div>
                            <div className="box-cart">
                                <p className="cart-prodName">{productos.productos.nombre}</p>
                            </div>
                            <div className="box-cart">
                            <p>
                                Total: ${productos.productos.precio * productos.cantidad} x {productos.cantidad}
                            </p>
                            <button onClick={() => eliminarProducto(productos.id)}>
                                <span className="material-icons">delete</span>
                            </button>
                            </div> 
                        </li>
                    </ul>
                ))}
                </div>
                <div className="carrito-detalles">
                    <button onClick={limpiarCarrito}>VACIAR</button>
                    <button  onClick={handlePagar}  id="btnPayment"> PAGAR </button>
                </div>
            </article>
        </>
    );
};

export default Carrito;
