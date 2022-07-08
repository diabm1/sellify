import { response } from "express";
import React from "react";

// I can't get the page to load so this component is untested
// The function should create a card for every product in the database
// There should also have a search/filter feature at the top of the page
// The component currently returns example data
// Josiah 7/7
function Products() {
    fetch('/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        for (let i = 0; i < response.length; i++) {
            const {
                name,
                image,
                brand,
                price,
                ...rest
            } = response[i];

            return (
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src={`${image}`} alt={`${name}`}/>
                    <div className="card-body">
                        <h1 className="card-text">${name}</h1>
                        <h2 className="card-text">%{price}</h2>
                        <h3 className="card-text">%{brand}</h3>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="container">
            <h1>Products</h1>
            <div className="row">
                
            </div>
        </div>
    )
}

export default Products;
