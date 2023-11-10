import React from 'react';
import filtre from "../../assets/pictos/sliders.svg";
import animationHeader from "./headerAnim.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass as fasMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleUberLogin = () => {
    // Logique de connexion avec Uber
    const redirectUri = encodeURIComponent('http://localhost:3000/connexion');
    window.location.href = `https://login.uber.com/oauth/v2/authorize?client_id=dNSiA5-aHhaDC4Ue9nTrzXhJW7GhYsMR&response_type=code&redirect_uri=${redirectUri}`;
  };

  return (
    <header>
      <div className="t">
        <div>
          <p className="sub">Maintenant</p>
          <b>Lieu actuel</b>
        </div>
        <div className="account" onClick={handleUberLogin}>
          <FontAwesomeIcon icon={farUser} />
        </div>
      </div>
      <div className="b">
        <div>
          <FontAwesomeIcon icon={fasMagnifyingGlass} />
          <input
            type="text"
            name="headSearch"
            id="headSearch"
            placeholder="restaurants, commerces, plats"
          />
        </div>
        <img src={filtre} alt="filter" />
      </div>
      <script src={animationHeader}></script>
    </header>
  );
};

export default Header;
