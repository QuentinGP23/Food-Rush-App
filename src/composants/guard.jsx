import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user'); 
  return isLoggedIn ? children : <Navigate to="/Account" />;
};

export default AuthGuard;