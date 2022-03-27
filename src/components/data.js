
import product1 from "../images/1.jpg"
import product2 from "../images/2.jpg"
import product3 from "../images/3.jpg" 

import artist1 from "../images/ar-1.jpg" 
import artist2 from "../images/ar-2.jpg" 
import artist3 from "../images/ar-3.jpg" 

import music1 from "../images/ms-1.jpg"

let productos = [
    { categoria: 'riptide', id: 1 , imagen: <img src={product1} alt="img" id="product-image"/>, nombre: 'No hables con extraños', precio: '2700', stock: 3, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor viverra platea porttitor, eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula at ac. , eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula."},
    { categoria: 'riptide', id: 2 , imagen: <img src={product2} alt="img" id="product-image"/>, nombre: 'Siempre positivos', precio: '2300', stock: 2, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor viverra platea porttitor, eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula at ac. , eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula."},
    { categoria: 'riptide', id: 3 , imagen: <img src={product3} alt="img"  id="product-image"/>, nombre: 'Pumpking revenge', precio: '2000', stock: 5, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor viverra platea porttitor, eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula at ac. , eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula."},
    { categoria: 'artista', id: 4 , imagen: <img src={artist1} alt="img"  id="product-image"/>, nombre: 'Galileo', precio: '4800', stock: 1, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor viverra platea porttitor, eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula at ac. , eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula."},
    { categoria: 'artista', id: 5 , imagen: <img src={artist2} alt="img"  id="product-image"/>, nombre: 'Descartes', precio: '4900', stock: 2, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor viverra platea porttitor, eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula at ac. , eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula."},
    { categoria: 'artista', id: 6 , imagen: <img src={artist3} alt="img"  id="product-image"/>, nombre: 'Pasteur', precio: '4900', stock: 4, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor viverra platea porttitor, eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula at ac. , eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula."},
    { categoria: 'musica', id: 7 , imagen: <img src={music1} alt="img"  id="product-image"/>, nombre: 'Apashe - Uebok VIP', precio: '1200', stock: 4, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor viverra platea porttitor, eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula at ac. , eget cras diam luctus taciti suspendisse feugiat litora ligula molestie. Cum lectus sociosqu dui etiam, vehicula."},
]

export default productos