import React from "react";
import productos from "./data";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

import "./scss/ItemListContainer.scss";
import "./scss/loadingScreen.scss";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [producto, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      
      setTimeout(() => {
      if (categoria === "artistas") {
          setProductos(productos.filter(productos => productos.categoria === "artistas"));
          console.log("categoria artistas");
        } else if (categoria === "riptide") {
          setProductos(productos.filter(productos => productos.categoria === "riptide"));
          console.log(" categoria riptide")
        } else {
          setProductos(productos);
          console.log("no hay categoria"); 
        }
        setLoading(false);
        document.getElementById("options-right").classList.add("options-right-pasive");
      }, 9100);
    }, [categoria]); 


    promesa
      .then((respuestaDeLaApi) => {
        setProductos(respuestaDeLaApi);
        toast.error("Hubo un error!");
      })
      .catch((errorDeLaApi) => {
        toast.error(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productos, categoria]);

  if (loading) {
    return (
      <div className="item-list-container">
        <div className="item-list-loading">
          <img src="https://media1.giphy.com/media/J4gENZz2SLhLnRDgTf/giphy.gif?cid=790b7611406f964ef25c6cb744eb8d5acb8d2f3649f7948a&rid=giphy.gif&ct=g" alt="loading" />
        </div>
      </div>
    );
  }

  return (
    <>
    <ItemList productos={producto} loading={loading} /> 
    </>
  );
};

export default ItemListContainer
