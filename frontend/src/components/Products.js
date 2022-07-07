import React from "react";

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