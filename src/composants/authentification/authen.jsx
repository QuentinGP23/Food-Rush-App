import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

const UberAuth = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (code) {
      // Échangez le code d'autorisation contre un jeton d'accès
      exchangeCodeForAccessToken(code);
    } else {
      // Gérer l'erreur ou la non-autorisation
      history.push('/error');
    }
  }, [location, history]);

  const exchangeCodeForAccessToken = async (code) => {
    try {
      const response = await axios.post(
        'https://login.uber.com/oauth/v2/token',
        {
          client_id: 'dNSiA5-aHhaDC4Ue9nTrzXhJW7GhYsMR',
          client_secret: 'dTF4L3UtIQn6XtxlL_sFGx1AaiRZ0UFmWzHS7yne',
          code,
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000/connexion',
        }
      );

      const accessToken = response.data.access_token;

      // Stocker le jeton d'accès dans votre application (par exemple, dans le state ou les cookies)
      // Rediriger ou faire d'autres actions en fonction de votre logique d'application
    } catch (error) {
      // Gérer les erreurs liées à l'échange du code contre le jeton d'accès
      console.error('Erreur lors de l\'échange du code contre le jeton d\'accès', error);
      history.push('/error');
    }
  };

  return (
    <div>
      <p>Authentification Uber en cours...</p>
    </div>
  );
};

export default UberAuth;
