import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faUser, faReceipt, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass as fasMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import filtre from "../../assets/pictos/sliders.svg";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import animationHeader from './headerAnim.js';

const Header = () => {
  const toggleConnected = () => {
    const connectedDiv = document.querySelector('.connected');
    connectedDiv.style.display = (connectedDiv.style.display === 'none' || connectedDiv.style.display === '') ? 'block' : 'none';
  };
  return (
    <header>
        <div className="t">
          <div>
            <p className="sub">Maintenant</p>
            <b>Lieu actuel</b>
          </div>
          <div className="account" onClick={toggleConnected}>
            <FontAwesomeIcon icon={farUser} />
            <div className='connected'>
              <ul>
                <li>
                  <Link><FontAwesomeIcon icon={faUser} />Mon compte</Link>
                </li>
                <li>
                  <Link><FontAwesomeIcon icon={faReceipt} />Mes commandes</Link>
                </li>
                <li>
                  <Link><FontAwesomeIcon icon={faRightFromBracket} />Se déconnecter</Link>
                </li>
              </ul>
            </div>
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
      <div className="lieu">
      </div>
    </header>
  );
};

export default Header;
