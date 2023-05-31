import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {configureStore} from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import productReducer, { fetchProducts } from "./features/productSlice";
import cartReducer, { getTotals } from "./features/cartSlice";
import { productsApi } from "./features/productsAPI";
import authReducer, { loadUser } from "./features/authSlice";
import Routers from "./router/Routers";




const store = configureStore({
  reducer:{
    products: productReducer,/* bcs of a typo {prducts} */
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
   return getDefaultMiddleware().concat(productsApi.middleware)
  }
})

store.dispatch(fetchProducts());
store.dispatch(getTotals());
store.dispatch(loadUser(null));



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider store={store}>
      <ToastContainer/>
      <App>
        
      </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
