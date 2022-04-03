import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react"
import { contexto } from "./MiProvider"

import ItemDetail from "./ItemDetail"
import { dbFirestore } from '../firebase';
import {query,getDocs,getDoc,doc,where,collection} from 'firebase/firestore';

import "./scss/ItemDetailContainer.scss"
import "./scss/loadingScreen.scss"

export const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { busqueda } = useContext(contexto);
    const { id } = useParams();

    useEffect(() => {

        const q = query(collection(dbFirestore, "productos"), where("id", "==", id));
        
        getDocs(q)
            .then((res) => setProductos(res.docs.map(p => ({ productos: p.data(), id: p.id }))))
            .catch((err) => console.log("Error: ", err))
            .finally(()=>{
                setLoading(false)
            })
        
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
