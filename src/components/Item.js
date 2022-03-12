import React from "react"
import "./Item.scss"

import ItemCount from "./ItemCount"

export function Item({ producto }) {
    return (

        <div className="map-item">
            <div className="ImagenItem"> {producto.imagen} </div>
            <p> {producto.nombre} </p>
        </div>
        
    )
}
