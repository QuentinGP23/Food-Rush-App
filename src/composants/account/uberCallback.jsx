import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const UberCallback = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleUberCallback = async () => {
      const queryParams = new URLSearchParams(location.search);
      const authorizationCode = queryParams.get('code');

      try {
        // Étape 4 : Échanger le code d'autorisation contre un access_token
        const response = await axios.post(
          'https://sandbox-api.uber.com/v1.2/oauth/token',
          {
            client_id: 'njrn1mkQSZST3MoBRD_-qCFiyY2xkex5',
            client_secret: 'IIH9o80EJ5dVy2kSjuju15o3VWlmQu5CR-H4-2YZ',
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:3000/uber-callback',
            code: authorizationCode,
          }
        );

        const accessToken = response.data.access_token;

        // Étape 5 : Utiliser l'access_token comme nécessaire dans ton application
        console.log('Access Token from UberCallback (Sandbox):', accessToken);

        // Tu peux rediriger l'utilisateur ou faire d'autres actions nécessaires ici
      } catch (error) {
        console.error('Erreur lors de l\'échange du code d\'autorisation:', error.message);
      } finally {
        // Rediriger l'utilisateur vers la page principale ou une autre page si nécessaire
        history.push('/');
      }
    };

    handleUberCallback();
  }, [location.search, history]);

  return (
    <div>
      <p>Connexion à Uber en cours...</p>
    </div>
  );
};

export default UberCallback;
