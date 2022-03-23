import React from 'react'
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react"

import ItemDetail from "./ItemDetail"
import arrayElements from './data';

import "./scss/ItemDetailContainer.scss"

export const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(arrayElements);
                console.table(productos)    
            },
                //time
            );
        });

        promesa
            .then((respuestaDeLaApi) => {
                setProductos
            })
            .catch((errorDeLaApi) => {
                toast.error(errorDeLaApi);
            })
    }, [id]);

    return (
        <div className='containerDetail'>
            <ItemDetail  productos={arrayElements} />
        </div>
    );
};

export default ItemListContainer;
