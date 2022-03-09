import React from 'react'
import { useState, useEffect } from "react"

import './ItemListContainer.scss'
import ItemList from './ItemList'

import product1 from "../images/1.jpg"
import product2 from "../images/2.jpg"
import product3 from "../images/3.jpg" 
import product4 from "../images/4.jpg" 
import ItemCount from './ItemCount'

export  const ItemListContainer = ({}) => {

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
    },
]

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(()=>{

        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },3000)
        })

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
        })
        .finally(()=>{
          setLoading(false)
      })
    })


  return (
    <>
      <ItemList productos={productos}/> 
    </>
  )
}

export default ItemListContainer