import React, { useEffect } from 'react';
import axios from 'axios';
import filtre from "../../assets/pictos/sliders.svg";
import animationHeader from "./headerAnim.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass as fasMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="t">
        <div>
          <p className="sub">Maintenant</p>
          <b>Lieu actuel</b>
        </div>
        <div className="account">
          <a href='https://login.uber.com/oauth/v2/authorize?client_id=njrn1mkQSZST3MoBRD_-qCFiyY2xkex5&response_type=token&redirect_uri=http://localhost:3000'><FontAwesomeIcon icon={farUser} /></a>
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
