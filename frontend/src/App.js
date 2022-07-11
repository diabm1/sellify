import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
// import { useSelector } from 'react-redux';
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import Header from "./components/Header";
//import { Component } from 'react';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function Basic() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />

        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/" element={<Basic />} />
              <Route path="/orders" element={OrdersScreen} />
              <Route path="/profile" element={ProfileScreen} />
              <Route path="/order/:id" element={OrderScreen} />
              <Route path="/products" element={ProductsScreen} />
              <Route path="/shipping" element={ShippingScreen} />
              <Route path="/payment" element={PaymentScreen} />
              <Route path="/placeorder" element={PlaceOrderScreen} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/product/:id" element={ProductScreen} />
              <Route path="/cart/:id?" element={CartScreen} />
              <Route path="/category/:id" element={HomeScreen} />
            </Routes>
          </div>
        </main>

        <footer className="footer">All right reserved.</footer>
      </Router>
    </ApolloProvider>
  );
}

export default App;
