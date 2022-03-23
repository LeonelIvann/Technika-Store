import React from "react"
import "./scss/Item.scss"

import { Link } from "react-router-dom";

export function Item({ producto }) {
    return (
        
        <div className="map-item">
            <div className="ImagenItem"> {producto.imagen} </div>
            <p> {producto.nombre} </p>
            <button className="button-detalles">
                <Link to={`/item/${producto.id}`}> VER DETALLES</Link>
            </button>
        </div>
        
    )
}
