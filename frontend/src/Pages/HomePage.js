import React from "react";
import { Link } from "react-router-dom";
import data from "../data";




function HomePage(props){
    return (
    <div>
        <ul className= "products">
              {
                data.products.map(product => 
              <li>
                <div className= "product">
                  <img className= "product-image" src={product.image} alt="product"/>
                  <div className= "product-name">
                    <Link to={"/product.html/" + product._id}> {product.name}</Link>
                  </div>
                  <div className = "product-brand">{product.brand}</div>
                  <div className = "product-price"> {product.price}</div>
                  <div className= "product-rating"> {product.rating} Stars (product.numReviews)</div>
                </div>
              </li>)
}

            </ul>
    </div>
    )
}
export default HomePage;