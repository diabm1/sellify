import React from "react";
import {Link, useRoutes} from "react-router-dom"

function Header(){
    // const userSignin = use((state) => userSignin);
    // const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
  

  
        <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9779;</button>
            <Link to="/">Sellify</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            
              <Link to="/profile">{}</Link>
            
              <Link to="/signin">Sign In</Link>
          
            
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            
          </div>
        </header>
        <main class= "main">
          <div class= "content">
            <ul class= "products">
              <li>
                <div class= "product">
                  <img class= "product-image" src="images/d1.jpg" alt="product"/>
                  <div class= "product-name">
                    <a href="product.html"> sexy shirt</a>
                  </div>
                  <div class = "product-brand">Nordstrom</div>
                  <div class = "product-price"> $20</div>
                  <div class= "product-rating"> 4.5 Stars (50 Reviews)</div>
                </div>
              </li>
              <li>
                <div class= "product">
                  <img class= "product-image" src="images/d1.jpg" alt="product"/>
                  <div class= "product-name">
                    <a href="product.html"> sexy shirt</a>
                  </div>
                  <div class = "product-brand">Nordstrom</div>
                  <div class = "product-price"> $20</div>
                  <div class= "product-rating"> 4.5 Stars (50 Reviews)</div>
                </div>
              </li>
              <li>
                <div class= "product">
                  <img class= "product-image" src="images/d1.jpg" alt="product"/>
                  <div class= "product-name">
                    <a href="product.html"> sexy shirt</a>
                  </div>
                  <div class = "product-brand">Nordstrom</div>
                  <div class = "product-price"> $20</div>
                  <div class= "product-rating"> 4.5 Stars (50 Reviews)</div>
                </div>
              </li>
              <li>
                <div class= "product">
                  <img class= "product-image" src="images/d1.jpg" alt="product"/>
                  <div class= "product-name">
                    <a href="product.html"> sexy shirt</a>
                  </div>
                  <div class = "product-brand">Nordstrom</div>
                  <div class = "product-price"> $20</div>
                  <div class= "product-rating"> 4.5 Stars (50 Reviews)</div>
                </div>
              </li>
              <li>
                <div class= "product">
                  <img class= "product-image" src="images/d1.jpg" alt="product"/>
                  <div class= "product-name">
                    <a href="product.html"> sexy shirt</a>
                  </div>
                  <div class = "product-brand">Nordstrom</div>
                  <div class = "product-price"> $20</div>
                  <div class= "product-rating"> 4.5 Stars (50 Reviews)</div>
                </div>
              </li>
              <li>
                <div class= "product">
                  <img class= "product-image" src="images/d1.jpg" alt="product"/>
                  <div class= "product-name">
                    <a href="product.html"> sexy shirt</a>
                  </div>
                  <div class = "product-brand">Nordstrom</div>
                  <div class = "product-price"> $20</div>
                  <div class= "product-rating"> 4.5 Stars (50 Reviews)</div>
                </div>
              </li>
            </ul>
          </div>
        </main>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
        </div>
    )
}
export default Header;