import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './MiProvider';
import { toast } from 'react-toastify';

import "../components/scss/CartWidget.scss";

export const CartWidget = ( cantidadItems ) => {

    // necesito el contexto para poder acceder al total del carrito, si no hay productos agregados o comprados el valor será 0
    const { total } = useContext(contexto);

    return (
        <Link to={"/carrito"}>
            <button className="material-icons cart">
                shopping_cart
                <p id="cant-buy">
                    {total > 0 ? `(${cantidadItems})` : '' }
                </p>
            </button>
        </Link>
    );
};
export default CartWidget