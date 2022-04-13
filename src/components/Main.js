import { Route, Routes, Link } from "react-router-dom";

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";


const Main = (props) => {

    return (
        <main className="main">
            <Routes>
                <Route path="/Technika-Store" element={<ItemListContainer/>}/>
                <Route path="/carrito"  element={<Carrito/>}/>
                <Route path="/category/:id"  element={<ItemListContainer/>}/>
                <Route path="/item/:id"  element={<ItemDetailContainer/>}/>
            </Routes>
            <section id="options-right" className="options-right-pasive">
                <div id="options" className="options-active-btn options-active-color">
                    <li id="options-li1"><Link to={"/category/artistas"} id="artistas" >ARTISTAS</Link> </li>
                    <li id="options-li2"><Link to={"/category/musica"} id="musica"   >MUSICA   </Link> </li>
                    <li id="options-li3"><Link to={"/category/riptide"} id="riptide" >RIPTIDE</Link> </li>
                    <li id="options-li4"><Link to={"/carrito"} >COMPRAS</Link> </li>
                </div>
            </section>
        </main>
    );
}

export default Main;