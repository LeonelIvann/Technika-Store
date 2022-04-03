import React from "react"
import { Item } from "./Item"

export const ItemList = ({index, productos}) => {

    return (
        <div className="shop-c">
            {productos.map((producto, index) => (
                <Item key={index} producto={producto} />
            ))}
        </div>
    )
}

export default ItemList