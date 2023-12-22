import React, { useState } from "react";
import "./../../base/ds.scss";
import "./account";
import "./account.scss";
import LoginForm from "./connexion";
import SignUpForm from "./inscription";
import Connected from "./connected";
const Account = () => {
  const [showLogin, setShowLogin] = useState(true);
  const isLoggedIn = localStorage.getItem('user');

  return (
    <div id="Account">
      {isLoggedIn ? (
        <Connected />
      ) : (
        showLogin ? (
          <LoginForm onSwitch={() => setShowLogin(false)} />
        ) : (
          <SignUpForm onSwitch={() => setShowLogin(true)} />
        )
      )}
    </div>
  );
};

export default Account;

