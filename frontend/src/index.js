import React from "react";
import { Provider } from "react-redux";
//import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./store";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
