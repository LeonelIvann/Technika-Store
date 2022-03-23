import React from "react";
import arrayElements from "./data";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

import "./scss/ItemListContainer.scss";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resultado, rej) => {

      setTimeout(() => {
        const result2 = resultado
        if (arrayElements.id === id) {
          let filtr = arrayElements.filter(arrayElements => arrayElements.id === id)
          result2(filtr)
        } else {
          toast.error("no hay coincidencia con")
          resultado(result2)
        }
          console.log()
      }, 6400);
      toast.error("Hubo un error");
    });

    promesa
      .then((respuestaDeLaApi) => {
        toast.error("Hubo un error!")
      })
      .catch((errorDeLaApi) => {
        toast.error(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <ItemList productos={arrayElements} />
    </>
  );
};

export default ItemListContainer;
