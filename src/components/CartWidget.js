import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './MiProvider';

import "../components/scss/CartWidget.scss";

export const CartWidget = ( cantidadItems ) => {

    const { carrito } = useContext(contexto);

    return (
        <Link to={"/carrito"}>
            <button className="material-icons cart">
                shopping_cart
                <p id="cant-buy">
                    {carrito.length}
                </p>
            </button>
        </Link>
    );
};
export default CartWidget