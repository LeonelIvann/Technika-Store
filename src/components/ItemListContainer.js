import React from 'react'

import { useState, useEffect } from "react"
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

import './scss/ItemListContainer.scss'
import ItemList from './ItemList'

import product1 from "../images/1.jpg"
import product2 from "../images/2.jpg"
import product3 from "../images/3.jpg" 

import artist1 from "../images/ar-1.jpg" 
import artist2 from "../images/ar-2.jpg" 
import artist3 from "../images/ar-3.jpg" 

import music1 from "../images/ms-1.jpg"


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
        nombre: "Galileo Galilei",
        imagen: <img src={artist1} alt="" id="product-image"/>,
    },
    {
      id: 5,
      nombre: "Descartes",
      imagen: <img src={artist2} alt="" id="product-image"/>,
    },
    {
      id: 6,
      nombre: "Pasteur",
      imagen: <img src={artist3} alt="" id="product-image"/>,
    },
]

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    console.log(useParams())

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },3400)
        })

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            toast.error(errorDeLaApi)
        })
        .finally(()=>{
          setLoading(false)
      })
    },[id])
  return (
    <>
      <ItemList productos={productosIniciales}/> 
    </>
  )
}

export default ItemListContainer