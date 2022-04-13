import { createContext, useState } from "react";
export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const agregarProducto = (item, cantidad) => {
        const producto = carrito.find(producto => producto.id === item.id)
        if (producto) {
            const nuevoCarrito = carrito.map(producto => {
                if (producto.id === item.id) {
                    return {
                        ...producto,
                        cantidad: producto.cantidad + cantidad
                    }
                }
                return producto
            })
            const nuevoTotal = total + item.precio * cantidad 
            setTotal(nuevoTotal)
            setCarrito(nuevoCarrito)
        } else {
            const nuevoProducto = {
                ...item,
                cantidad
            }
            setCarrito([...carrito, nuevoProducto])
        }
    }
    const limpiarCarrito = () => {
        setCarrito([])
    }
    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id)
        setCarrito(productos)
    }

    const valorDelContexto = {
        total: total,
        carrito : carrito,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        limpiarCarrito : limpiarCarrito,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider