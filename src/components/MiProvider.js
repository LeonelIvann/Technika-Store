import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const agregarProducto = (item, cantidad) => {
        const producto = {producto:item,cantidad}
        setCarrito([...carrito, producto])
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
    }
    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id)
        setCarrito(productos)
        setTotal(total - productos.precio)
    }
    const valorDelContexto = {
        total : total,
        carrito : carrito,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        limpiarCarrito : limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider