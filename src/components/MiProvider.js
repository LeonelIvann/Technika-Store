import { createContext, useState } from "react";
import { toast } from "react-toastify";
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
            setCarrito(nuevoCarrito)
            setTotal(total + item.precio * cantidad)
        } else {
            const nuevoProducto = {
                ...item,
                cantidad
            }

            setCarrito([...carrito, nuevoProducto])
            setTotal(total + item.precio * cantidad)
        }
    }

    const limpiarCarrito = () => {
        toast.success("No es un adios, es un hasta luego!")
        setCarrito([])
    }
    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id)
        setCarrito(productos)
        setTotal(total - productos.precio)
    }
    const actualizarCantidad = (id, cantidad) => {
        const productos = carrito.map(producto => {
            if (producto.id === id) {
                return {
                    ...producto,
                    cantidad
                }
            }
            return producto
        })
        setCarrito(productos)
        setTotal(total - productos.precio)
    }
    
    const valorDelContexto = {
        total : total,
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