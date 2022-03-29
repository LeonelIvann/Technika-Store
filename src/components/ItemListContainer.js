import React from "react";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
// import Firebase
import { getDocs, query, collection, where, getDoc } from "firebase/firestore";
import { dbFirestore } from "../firebase";

import "./scss/ItemListContainer.scss";
import "./scss/loadingScreen.scss";
import ItemList from "./ItemList";


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {

    if (idCategory) {
      const q = query(collection(dbFirestore, "productos"), where("categoria", "==", idCategory));

      getDocs(q)
        .then((res) => setProductos(res.docs.map(p => ({ productos: p.data(), id: p.id })), setLoading(false)))
        .catch((err) => console.log("Error: ", err));

    } else {
      getDocs(collection(dbFirestore, "productos"))
        .then((res) => setProductos(res.docs.map(p => ({ productos: p.data(), id: p.id })), setLoading(false)))
        .catch((err) => console.log("Error: ", err));
    }

    /* if (loading) {
      return (
        <div className="item-list-container">
          <div className="item-list-loading">
            <img src="https://media1.giphy.com/media/J4gENZz2SLhLnRDgTf/giphy.gif?cid=790b7611406f964ef25c6cb744eb8d5acb8d2f3649f7948a&rid=giphy.gif&ct=g" alt="loading" />
          </div>
        </div>
      );
    } */
  }, [idCategory]);

  return (
    <>
      <ItemList productos={productos}  loading={loading} />
    </>
  );
}

export default ItemListContainer
