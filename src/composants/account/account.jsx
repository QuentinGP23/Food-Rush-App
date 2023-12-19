import React, { useState } from "react";
import "./../../base/ds.scss";
import "./account";
import "./account.scss";
import LoginForm from "./connexion";
import SignUpForm from "./inscription";

const Account = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <div id="Account">
    {showLogin ? (
      <LoginForm onSwitch={() => setShowLogin(false)} />
    ) : (
      <SignUpForm onSwitch={() => setShowLogin(true)} />
    )}
  </div>
  );
};

export default Account;
