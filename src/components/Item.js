import React from "react"
import "./scss/Item.scss"

import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
    const { productos,id } = producto;
    return (
        <div className="map-item">
            <div className="imagenItem">  
                <img src={productos.img} alt="Producto"/>  
            </div>
            <p> {productos.nombre} </p>
            <button className="button-detalles">
                <Link to={`/item/${productos.id}`}> VER DETALLES</Link>
            </button>
        </div>
        
    )
}
