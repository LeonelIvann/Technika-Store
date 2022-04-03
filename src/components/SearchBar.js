import React from "react";
import './scss/SearchBar.scss';

function SearchBar() {

    const [search, setSearch] = React.useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filtrar=(busqueda)=>{
        console.log(busqueda);
        var resultado=busqueda.filter(function(sticker){
            return sticker.name.toLowerCase().includes(busqueda.toLowerCase());
        });
        // pasar el resultado a la función de la página principal ItemDetailContainer.js para que se muestre en el componente ItemDetail.js 
        window.parent.postMessage(resultado, "/");
        return resultado;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        filtrar(search);
    } 

    return(
        <form className="form-search"  onSubmit={handleChange} >
            <input type="text" id="search-bar" name="search" placeholder="Sticker de Joan Crawford"></input>
            <button className="button-search" type="submit">
                <i className="material-icons">search</i>
            </button>
        </form>
    );
}

export default SearchBar