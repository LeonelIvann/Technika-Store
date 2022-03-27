import React from 'react'
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react"
import { contexto } from "./MiProvider"
    
import ItemDetail from "./ItemDetail"
import arrayElements from './data';

import "./scss/ItemDetailContainer.scss"
import "./scss/loadingScreen.scss"

export const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                const producto = arrayElements.find(producto => producto.id === id);
                if (producto) {
                    setProductos(producto);
                    setLoading(false);
                } else {
                    rej("No se encontro el producto");
                }
                setLoading(false);
            }, 100);
        }, [id]);

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(respuestaDeLaApi);
                toast.error("Hubo un error!");
            })
            .catch((errorDeLaApi) => {
                toast.error(errorDeLaApi);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="item-list-container">
                <div className="item-list-loading">
                    <img src="https://media.giphy.com/media/J4gENZz2SLhLnRDgTf/giphy-downsized.gif" alt="loading" />
                </div>
            </div>
        )
    }

    return (
        <div className='containerDetail'>
            <ItemDetail productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
