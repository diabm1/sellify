import React from "react";
import { Provider } from "react-redux";
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
