import React from 'react';
import "./scss/ItemDetail.scss";


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
                    <h4 className='stockPrice'> Precio <hr /> {productos.precio}</h4>
                    <h4 className='stockProd'> Cantidad Disponible <hr />{productos.stock}</h4>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail
