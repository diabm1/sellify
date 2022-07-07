import React from "react";

// I can't get the page to load so this component is untested
// The page is currently filled with example cards using a default react logo
// Josiah 7/7
function Products() {

    return (
        <div className="container">
            <h1>Product</h1>
            <div className="row">
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="frontend\public\logo512.png" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">Pants</p>
                    </div>
                </div>
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="frontend\public\logo512.png" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">Socks</p>
                    </div>
                </div>
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="frontend\public\logo512.png" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">Artificially Flavored Handsoap</p>
                    </div>
                </div>
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="frontend\public\logo512.png" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">Ribbed for her pleasure coffee machines</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
