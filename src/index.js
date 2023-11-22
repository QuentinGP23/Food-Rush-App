import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
import HomePage from './composants/index/index';
import Basket from './composants/basket/basket';
import Account from './composants/account/account';
import Search from './composants/search/search';
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/Account',
      element: <Account />
    },
    {
      path: '/Basket',
      element: <Basket />
    },
    {
      path: '/Search',
      element: <Search />
    },
  ])

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

reportWebVitals();
