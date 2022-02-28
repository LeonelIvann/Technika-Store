import React from "react";
import './Card.scss';

import exampleImg from '../images/4.jpg';

function Card() {
    return (
        <section className="card product">
            <div className="card-image">
                <img src={exampleImg} alt="" id="product-image"/>
            </div>
            <div className="card-text">
                <h3 id="title">Poster Pyrokinesis</h3>
                <p>De Andrea Cerrato</p>
                <form className="form-Card">
                    <p id="price">$ 1800</p>
                    <button className="button-buy" type="submit">
                    <span class="material-icons span-buy">add_shopping_cart</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Card