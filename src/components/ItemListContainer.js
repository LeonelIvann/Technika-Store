import React from 'react'
import './ItemListContainer.scss';

function ItemListContainer(props) {
  console.log(props)
  return (
        <section className='ItemListContainer'>
          <p>Estás en {props.market}, en éste momento nos encontramos {props.status}, {props.message}</p>  
        </section>
  )
}

export default ItemListContainer