
import product1 from "../images/1.jpg"
import product2 from "../images/2.jpg"
import product3 from "../images/3.jpg" 

import artist1 from "../images/ar-1.jpg" 
import artist2 from "../images/ar-2.jpg" 
import artist3 from "../images/ar-3.jpg" 

let arrayElements = [
    { category: 'riptide', id: 1 , imagen: <img src={product1} alt="img" id="product-image"/>, nombre: 'No hables con extraños', precio: '4000'},
    { category: 'riptide', id: 2 , imagen: <img src={product2} alt="img" id="product-image"/>, nombre: 'Siempre positivos', precio: '4000'},
    { category: 'riptide', id: 3 , imagen: <img src={product3} alt="img"  id="product-image"/>, nombre: 'Venganza del hombre calabaza', precio: '4000'},
    { category: 'artista', id: 4 , imagen: <img src={artist1} alt="img"  id="product-image"/>, nombre: 'Galileo', precio: '4000'},
    { category: 'artista', id: 5 , imagen: <img src={artist2} alt="img"  id="product-image"/>, nombre: 'Descartes', precio: '4000'},
    { category: 'artista', id: 6 , imagen: <img src={artist3} alt="img"  id="product-image"/>, nombre: 'Pasteur', precio: '4000'},
]

export default arrayElements