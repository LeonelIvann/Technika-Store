import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const contexto = createContext()

const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const busqueda = (busqueda) => {   
        const resultado = busqueda.filter(function(sticker){
            return sticker.name.toLowerCase().includes(busqueda.toLowerCase());
        });
        window.parent.postMessage(resultado, "/");
        return resultado;
    }

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