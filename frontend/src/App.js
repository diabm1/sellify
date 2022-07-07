import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../src/App.css';
import CartView from './views/cartView';

import HomeView from './views/homeView';
import ProductView from './views/productView';
import Signin from './views/signIn';
import { useSelector } from 'react-redux';
import Register from './views/Register';
import ProductsView from './views/productsView';

import ShippingView from './views/shippingView';
import PaymentView from './views/paymentView';
// import PlaceOrder from './views/PlaceOrder';
import Orders from './views/Orders';
import ProfileView from './views/profileView';
// import HomeView from './views/homeView';
// import ProductView from './views/productView';
// import ProductsView from './views/productsView';



function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Sellify</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
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
        <main className="main">
          <div className="content">
            <Route path='/cart/:id?' component ={CartView} />
            <Route path="/Orders" component={Orders} />
            <Route path="/profile" component={ProfileView} />
            {/* <Route path="/PlaceOrder/:id" component={placeOrder} /> */}
            <Route path="/products" component={ProductsView} />
            <Route path="/shipping" component={ShippingView} />
            <Route path="/payment" component={PaymentView} />
            {/* <Route path="/placeorder" component={PlaceOrder} /> */}
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={ProductView} />
            <Route path="/category/:id" component={HomeView} />
            <Route path="/" exact={true} component={HomeView} />
        
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
