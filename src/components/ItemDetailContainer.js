import React from 'react'
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react"

import ItemDetail from "./ItemDetail"

import "./scss/ItemDetailContainer.scss"
import imagen5 from "../images/5.jpg"

export const ItemListContainer = ({}) => {

    let productosIniciales = 
        {
            id: 1,
            stock: 3,
            nombre: "No hables con extraños",
            descripcion: "Nam fringilla faucibus nunc velit hendrerit sociis mus ridiculus mollis penatibus ac, sollicitudin laoreet consequat erat fames curae cum eu nibh enim, conubia eget habitasse convallis dui sed ultrices tellus donec metus. Blandit magnis velit bibendum facilisis cubilia ullamcorper quisque laoreet integer, faucibus penatibus nam diam porttitor maecenas aliquet sociis. Tempus phasellus iaculis mattis ac auctor nisl metus dictumst facilisi, viverra ullamcorper risus eros vulputate nascetur sollicitudin habitant, volutpat accumsan in taciti cum est neque nibh.",
            imagen: <img src={imagen5} alt="" id="product-image" />,
            precio: "$ 3400",
        };

    const [productos, setProductos] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales);
                console.table(productos)
            }, 3000);
        });

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(productosIniciales);
            })
            .catch((errorDeLaApi) => {
                toast.error(errorDeLaApi);
            })
    }, [id]);

    return (
        <div className='containerDetail'>
            <ItemDetail  productos={productos} />
        </div>
    );
};

export default ItemListContainer;
