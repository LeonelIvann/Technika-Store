import { createContext, useState } from "react";
export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const [total, setTotal] = useState(0)

    const cantidadItems = () => {
        return carrito.reduce((total, item) => total + item.cantidad, 0)
    }   
    const agregarProducto = (producto) => {
        setCarrito([
            ...carrito,
            producto
        ])
    }
    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id)
        setCarrito(productos)
        setTotal(total - productos.precio)
    }
    const limpiarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }
    const isInCart = (producto) => {
        return carrito.some(productoCarrito => productoCarrito.id === producto.id)
    }

    const valorDelProvider = {
        carrito ,
        eliminarProducto,
        agregarProducto
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