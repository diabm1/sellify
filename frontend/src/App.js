import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import './App.css';
import { Link } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';



const openMenu =() => {
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu =() => {
  document.querySelector(".sidebar").classList.remove("open");
}

function App() {
  
 
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
            
             <Link to={'./SignInPage'}>SignIn</Link>
          
            
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
          <div className= "content">
            
            <Routes>
            <Route path='/signin' element = {<SignInPage />} />
            <Route path='/products/:id' element = {<ProductPage />} />
            <Route path = '/cart/:id?' element = {<CartPage />} />
            <Route path='/' exact={true} element= {<HomePage />} />

            </Routes>
            
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
    )
}
     
  


export default App;
