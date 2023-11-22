import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass as fasMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import filtre from "../../assets/pictos/sliders.svg"; // Ajout de l'import manquant
import animationHeader from './headerAnim.js';
const Header = () => {
  // État local pour stocker le jeton d'accès
  const [accessToken, setAccessToken] = useState(null);

  // Effet de chargement pour vérifier si un jeton d'accès est déjà stocké dans localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('uberEatsAccessToken');
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const handleUberEatsLogin = () => {
    const clientId = 'VOTRE_CLIENT_ID';
    const redirectUri = 'VOTRE_REDIRECT_URI';
    const authorizationUrl = `https://login.uber.com/oauth/v2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=VOS_SCOPES`;

    window.location.href = authorizationUrl;
  };

  const handleTokenExchange = async (authorizationCode) => {
    const clientId = 'VOTRE_CLIENT_ID';
    const clientSecret = 'VOTRE_CLIENT_SECRET';
    const redirectUri = 'VOTRE_REDIRECT_URI';

    try {
      const response = await axios.post('https://login.uber.com/oauth/v2/token', {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        code: authorizationCode,
      });

      const { access_token, expires_in, refresh_token, scope } = response.data;

      localStorage.setItem('uberEatsAccessToken', access_token);

      setAccessToken(access_token);
    } catch (error) {
      console.error('Erreur lors de l\'échange du code d\'autorisation contre le jeton d\'accès:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('uberEatsAccessToken');
    setAccessToken(null);
  };

  return (
    <header>
      {accessToken ? (
        <div className="t">
          <div>
            <p className="sub">Maintenant</p>
            <b>Lieu actuel</b>
          </div>
          <div className="account" onClick={handleLogout}>
            <FontAwesomeIcon icon={farUser} />
          </div>
          <p>Vous êtes connecté</p>
        </div>
      ) : (
        <div className="t" onClick={handleUberEatsLogin}>
        <div>
          <p className="sub">Maintenant</p>
          <b>Lieu actuel</b>
        </div>
        <div className="account">
          <FontAwesomeIcon icon={farUser} />
          <div className='connexion'>
            
          </div>
        </div>
      </div>
      )}

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
