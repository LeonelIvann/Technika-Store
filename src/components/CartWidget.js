import { Link } from 'react-router-dom';
import { contexto } from './MiProvider';

import "../components/scss/CartWidget.scss";

const CartWidget = () => {

    return (
        <Link to={"/carrito"}>
            <button className="material-icons cart">
                shopping_cart
                <p id="cant-buy" >
                    {/* {contexto(contexto).carrito.length} */}
                </p>
            </button>
        </Link>
    );
}; 
export default CartWidget