import React, { useEffect } from 'react';
import axios from 'axios';
import filtre from "../../assets/pictos/sliders.svg";
import animationHeader from "./headerAnim.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass as fasMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      // Échangez le code d'autorisation contre un access_token
      const clientId = 'dNSiA5-aHhaDC4Ue9nTrzXhJW7GhYsMR';
      const clientSecret = 'dTF4L3UtIQn6XtxlL_sFGx1AaiRZ0UFmWzHS7yne';
      const redirectUri = 'http://localhost:3000/connexion';

      // Ajoutez un en-tête pour le contrôle d'accès CORS
      const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:3000',  // Remplacez par votre propre domaine
      };

      axios.post('https://login.uber.com/oauth/v2/token', {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code: authorizationCode,
      }, { headers })
      .then(response => {
        const { access_token, refresh_token, scope } = response.data;
        // Utilisez access_token comme nécessaire
        console.log('Access Token:', access_token);
      })
      .catch(error => {
        console.error("Erreur lors de l'échange du code d\'autorisation :", error);
      });
    }
  }, []);

  const handleUberAuthRedirect = () => {
    // Redirige l'utilisateur vers la page d'autorisation Uber
    window.location.href = "https://login.uber.com/oauth/v2/authorize?client_id=dNSiA5-aHhaDC4Ue9nTrzXhJW7GhYsMR&response_type=code&redirect_uri=http://localhost:3000/connexion";
  };

  return (
    <header>
      <div className="t">
        <div>
          <p className="sub">Maintenant</p>
          <b>Lieu actuel</b>
        </div>
        <div className="account" onClick={handleUberAuthRedirect}>
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
