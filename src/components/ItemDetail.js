import React from 'react';
import "./scss/ItemDetail.scss";

import ItemCount from './Contador'

export function ItemDetail({ productos }) {
    return (
        <div className='itemDetail'>
            <div className="itemDetailImage"> {productos.imagen} </div>
            <div className='itemDetails'>
                <div className='product-important-info'>
                    <p className='title'> {productos.nombre} </p>
                    <p className='sub-title'> Historia de {productos.nombre}</p>
                    <p className='descripcion'>{productos.descripcion}</p>
                </div>
                <div className='product-info'>
                    <div className='container-ItemCount-detail'> 
                        <h4 className='stockPrice'> Precio <hr /> {productos.precio}  </h4>
                        <ItemCount stock={productos.stock} initial={1} />
                    </div>
                    <h4 className='stockProd'> Cantidad Disponible <hr />{productos.stock}</h4>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail
