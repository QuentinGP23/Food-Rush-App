import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter,  RouterProvider,} from "react-router-dom";
import HomePage from './composants/index/index';
import Basket from './composants/basket/basket';
import Account from './composants/account/account';
import Search from './composants/search/search';
import AuthGuard from './composants/guard';
import RestaurantDetails from './composants/index/restau'
const isUserLoggedIn = () => {
  return localStorage.getItem('user') != null;
};
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthGuard><HomePage /></AuthGuard>
    },
    {
      path: '/Account',
      element: <Account />
    },
    {
      path: '/Basket',
      element: <AuthGuard><Basket /></AuthGuard>
    },
    {
      path: '/Search',
      element: <AuthGuard><Search /></AuthGuard>
    },
    {
      path: '/restaurant/:index',
      element: <AuthGuard><RestaurantDetails /></AuthGuard>
    },
  ])

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

reportWebVitals();
