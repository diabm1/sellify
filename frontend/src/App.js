import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import RegisterPage from './Pages/RegisterPage';
import './App.css';
import { Link } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import ProfilePage from './Pages/ProfilePage';
import ProductsPage from './Pages/ProductsPage';
import ShippingPage from './Pages/ShippingPage'
import {Provider, useSelector} from 'react-redux'
// import store from './store'


function App() {
const openMenu =() => {
  document.querySelector(".sidebar").classList.add("open");
};
const closeMenu =() => {
  document.querySelector(".sidebar").classList.remove("open");
};

// *breaks our code*

  // const userSignin = useSelector(state => state.userSignin);
  // const { userInfo } = userSignin;


 
  return (
    <Router> 
    <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9779;</button>
            <Link to={'/'} >Sellify</Link>
          </div>
          <div className="header-links">
           <Link to = {'/CartPage'}>Cart</Link>
            {/* admin ref */}
              <a href='index.html'>{}</a>
            
             <Link to={'./signin'}>SignIn</Link>
          
            
              <div className="dropdown">
                <a href="index.html">Admin</a>
                <ul className="dropdown-content">
                  <li>
                  <a href='index.html'>Orders</a>
                  <a href='index.html'>Products</a>
                  </li>
                </ul>
              </div>
            
          </div>
        </header>
        <main className= "main">
          <div className= "content">sample text
            {/* <Provider> */}
            <Routes >
            <Route path='/shipping' exact={true} element = {<ShippingPage />} />
            <Route path='/profile' exact={true} element = {<ProfilePage />} />
            <Route path='/signin' exact={true} element = {<SignInPage />} />
            <Route path='/register' exact={true} element = {<RegisterPage />} />
            <Route path='/products/' exact={true} element = {<ProductsPage />} />
            <Route path='/products/:id'exact={true} element = {<ProductPage />} />
            <Route path = '/cart/:id?' exact={true} element = {<CartPage />} />
            <Route path='/' exact={true} element= {<HomePage />} />

            </Routes>
            {/* </Provider> */}
          </div>
        </main>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <a href='index.html'>Pants</a>
            </li>

            <li>
            <a href='index.html'>Shirts</a>
            </li>
          </ul>
        </aside>
        <footer className="footer">All right reserved.</footer>
      </div>
        </Router>   
    );
}
     
  


export default App;
