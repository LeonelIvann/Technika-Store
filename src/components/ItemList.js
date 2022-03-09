import React from "react"
import { Item } from "./Item"

export const ItemList = ({productos}) => {
    return (
        <div className="shop-c">
            {
                productos.map(productos =>{
                    return <Item producto={productos}/>
                })
            }
        </div>
    )
}

export default ItemList