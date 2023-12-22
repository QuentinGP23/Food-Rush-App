// localisation.jsx
import React from 'react';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

const LocalisationPopup = ({ onLocationReceived }) => {
  const handleGetLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Utilisez les coordonnées pour obtenir la ville (comme dans l'exemple précédent)
      // ...

      // Appeler la fonction de rappel avec les coordonnées ou la ville
      onLocationReceived({ latitude, longitude });

    } catch (error) {
      console.error('Erreur lors de la récupération de la localisation :', error);
    }
  };

  return (
    <div className='popup'>
      <p>Nous avons besoin de votre localisation</p>
      <button className='btn1'>Accepter</button>
      <button className='btn'>Refuser</button>
    </div>
  );
};

export default LocalisationPopup;
