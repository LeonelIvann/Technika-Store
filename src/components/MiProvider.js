import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const agregarProducto = (producto) => {
        const productoExiste = carrito.find(prod => prod.id === producto.id)
        if (productoExiste) {
            toast.error("El producto ya está en su carrito, vaya a la sección de compras");
            return;
        }
        setCarrito([...carrito, producto])
        setTotal(total + producto.precio)
        toast.success("Producto agregado al carrito")
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