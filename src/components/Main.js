import { Route, Routes } from "react-router-dom";

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";


const Main = (props) => {

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id"  element={<ItemListContainer/>}/>
                <Route path="/item/:id"  element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    );
}

export default Main;