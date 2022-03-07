import { useState, useEffect } from "react"
import "./Item.scss"

//import Card from "./Card"

import product1 from "../images/1.jpg"
import product2 from "../images/2.jpg"
import product3 from "../images/3.jpg" 
import product4 from "../images/4.jpg" 

let productosIniciales = [
    {
        id: 1,
        stock: 3,
        nombre: "No hables con extraños",
        imagen: <img src={product1} alt="" id="product-image"/>,
        precio: 100
    },
    {
        id: 2,
        stock: 2,
        nombre: "Siempre positivos",
        imagen: <img src={product2} alt="" id="product-image"/>,
        precio: 200
    },
    {
        id: 3,
        stock: 6,
        nombre: "Venganza del hombre calabaza",
        imagen: <img src={product3} alt="" id="product-image"/>,
        precio: 300
    },
    {
        id: 4,
        stock: 2,
        nombre: "Pirokinesis",
        imagen: <img src={product4} alt="" id="product-image"/>,
        precio: 300
    }
]

const Item = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    //useEffect(function [,array])

    //Este efecto se va a ejecutar despues del montado el componente y despues de cada renderizado
    useEffect(()=>{

        //Aca estoy simulando que hago un pedido a una API
        //Promise : Son objetos que prometen una funcionalidad que dura en el tiempo pero te "avisan" con su metodo .then() cuando termino todo bien o con su metodo .catch() cuando termino todo mal
        //DRY : Don't Repeat Yourself
        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },3000)
        })

        //console.log(promesa)

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            //setError("Hubo un error al cargar los datos, vuelva a intentarlo por favor... o no")
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })

    return (
        <main className="temporal-class">
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ul>
                {productos.map((producto,stock)=>{
                    return <li>
                        <div className="map-item">
                            <div className="ImagenItem">{producto.imagen}</div>
                            <p>{producto.nombre}</p>
                            <div className="details">
                                <h3>Precio : {producto.precio} </h3>
                                <h3>Cantidad en stock : {producto.stock} </h3>
                            </div>
                        </div>
                        </li>
                })}
            </ul>
        </main>
    );
}

export default Item;