import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: "Camisa",
            precio: 50,
            imagen: "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg",
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 100,
            imagen: "https://estaticos.muyinteresante.es/uploads/images/gallery/5971d8bb5bafe86c385a6625/gatito-atigrado-redes.jpg",
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 100,
            imagen: "https://estaticos.muyinteresante.es/uploads/images/gallery/5971d8bb5bafe86c385a6625/gatito-atigrado-redes.jpg",
        },
        {
            id: 1,
            nombre: "Camisa",
            precio: 50,
            imagen: "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg",
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 100,
            imagen: "https://estaticos.muyinteresante.es/uploads/images/gallery/5971d8bb5bafe86c385a6625/gatito-atigrado-redes.jpg",
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 100,
            imagen: "https://estaticos.muyinteresante.es/uploads/images/gallery/5971d8bb5bafe86c385a6625/gatito-atigrado-redes.jpg",
        },
        {
            id: 1,
            nombre: "Camisa",
            precio: 50,
            imagen: "https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg",
        },
    ])
    const [total, setTotal] =     useState(0)

    const agregarProducto = (producto) => {
        const productoExistente = carrito.find(p => p.id === producto.id)
        if (productoExistente) {
            productoExistente.cantidad += 1
        } else {
            producto.cantidad = 1
            setCarrito([...carrito, producto])
        }
        setTotal(total + producto.precio)
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