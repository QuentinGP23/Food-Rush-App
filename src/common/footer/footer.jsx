import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faCartShopping, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
const Footer = () => {
  return (
    <footer>
      <div className="lieu">
          <b>Adresse de livraison</b>
          <div><FontAwesomeIcon icon={faLocationDot} /><p>10 rue Paul Dautier, 78140 Vélizy-Villacoublay, France</p><p className='modif'>Modifier</p></div>
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
    </footer>
  );
};

export default Footer;
