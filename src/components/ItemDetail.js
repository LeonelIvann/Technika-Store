import React, { useContext } from 'react';
import { contexto } from './MiProvider';
import "./scss/ItemDetail.scss";


import ItemCount from './Contador'

export function ItemDetail({ productos }) {
    const {agregarProducto} = useContext(contexto)

    const handleAdd = (cantidad) => {
        agregarProducto(productos[0].productos.id, cantidad)
    }

    return (
        <div className='itemDetail'>
            <div className="itemDetailImage"> 
                <img src={productos.imagen} alt={productos.nombre} />
                <img src={productos[0].productos.img} alt="Producto"/>
            </div>
            <div className='itemDetails'>
                <div className='product-important-info'>
                    <p className='title'> {productos[0].productos.nombre} </p>
                    <p className='sub-title'> Historia de {productos[0].productos.nombre}</p>
                    <p className='descripcion'>{productos[0].productos.descripcion}</p>
                </div>
                <div className='product-info'>
                    <div className='container-ItemCount-detail'> 
                        <h4 className='stockPrice'> Precio <hr /> {productos[0].productos.precio}  </h4>
                        <ItemCount onAdd={handleAdd} stock={productos[0].productos.stock} initial={1} />
                    </div>
                    <h4 className='stockProd'> Cantidad Disponible <hr />{productos[0].productos.stock}</h4>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail
