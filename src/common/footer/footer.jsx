import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import lieuJs from'./lieu.js'
const Footer = () => {
  return (
    <footer>
      <div className="lieu">
      </div>
      <nav>
        <Link to={'/'}>
          <FontAwesomeIcon icon={faHouse} />
          <p>Accueil</p>
        </Link>
        <Link to={'/Search'}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>Parcourir</p>
        </Link>
        <Link to={'/Basket'}>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Paniers</p>
        </Link>
        <Link to={'/Account'}>
          <FontAwesomeIcon icon={faUser} />
          <p>Compte</p>
        </Link>
      </nav>
      <script src={lieuJs} ></script>
    </footer>
  );
};

export default Footer;
