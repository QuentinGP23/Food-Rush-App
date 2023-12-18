import React from 'react';
import axios from 'axios';

const UberAuth = () => {
  const handleUberAuth = async () => {
    try {
      const response = await axios.post(
        'https://login.uber.com/oauth/v2/token',
        {
          client_id: 'njrn1mkQSZST3MoBRD_-qCFiyY2xkex5',
          client_secret: 'IIH9o80EJ5dVy2kSjuju15o3VWlmQu5CR-H4-2YZ',
          grant_type: 'client_credentials',
          scope: 'profile',
        }
      );

      const accessToken = response.data.access_token;

      // Étape 3 : Utiliser l'access_token comme nécessaire dans ton application
      console.log('Access Token:', accessToken);
    } catch (error) {
      console.error('Erreur lors de la connexion à Uber:', error.message);
    }
  };
  return (
    <div>
      <button onClick={handleUberAuth}>Se connecter avec Uber</button>
    </div>
  );
};
export default UberAuth;
