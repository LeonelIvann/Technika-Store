import React from "react"
import { Item } from "./Item"

export const ItemList = ({index, productos}) => {
    return (
        <div className="shop-c">
            {
                productos.map((productos,index) =>{
                    return <Item key={index} producto={productos}/>
                })
            }
        </div>
    )
}

export default ItemList