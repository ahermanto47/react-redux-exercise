import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productReducer, { productsFetch } from './features/productSlice';
import { productsApi } from './features/productsApi';
import cartReducer from './features/cartSlice';

/***
 * use asyncthunk 
 * ***/
// const store = configureStore({
//   reducer: {
//     products: productReducer,
//   }
// });


/***
 * use RTK query 
 * ***/
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});

store.dispatch(productsFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

