import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route, Navigate, } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
// import Details from "./components/Details/Details";
// import Cart from "./components/Cart";
// import Register from "./components/Signup/Register";
// import Error from "./components/Error";

function App() {

  const [search, setSearch] = useState("");

  return (
    <DataProvider>
      
              <Routes>
          <Route exact path="/error404" element={Error} />
          <Route>

            <Header />
            <Route>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/products" component={() => <Products search={search} />} /> */}
              {/* <Route exact path="/products/:id" component={Details} /> */}
              {/* <Route exact path="/cart" component={Cart} /> */}
              {/* <Route exact path="/register" component={Register} /> */}
              <Navigate to="/error404" />
              {/* <Products /> */}
            </Route>
            <Footer />
            
          </Route>
        </Routes>
    
     </DataProvider>
  );
}

export default App;
