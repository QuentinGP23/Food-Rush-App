import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Geolocation } from '@capacitor/geolocation';
import {
  faHouse,
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Footer = () => {
  const [addressInput, setAddressInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const savedLocations = JSON.parse(localStorage.getItem('locations')) || [];
    setLocations(savedLocations.map(location => ({ ...location, active: false })));
  }, []);

  const searchAddress = async (address) => {
    const apiUrl = `https://geocode.maps.co/search?q=${encodeURIComponent(address)}`;
    try {
      const response = await axios.get(apiUrl);
      setSuggestions(response.data);
    } catch (error) {
      setError("Erreur lors de la récupération des adresses");
      console.error("Erreur lors de la récupération des adresses:", error);
    }
  };

  const handleAddressInputChange = (e) => setAddressInput(e.target.value);

  const handleAddressSubmit = async (event) => {
    event.preventDefault();
    if (addressInput) {
      await searchAddress(addressInput);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    let newLocations = JSON.parse(localStorage.getItem('locations')) || [];
    newLocations.push({
      name: suggestion.display_name,
      longitude: suggestion.lon,
      latitude: suggestion.lat,
      active: false
    });
    localStorage.setItem('locations', JSON.stringify(newLocations));
    setSuggestions([]);
    setAddressInput('');
    setLocations(newLocations);
  };
  const handleDeleteLocation = (index) => {
    let updatedLocations = [...locations];
    updatedLocations.splice(index, 1);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
    setLocations(updatedLocations);
  };
  const handleLocationSelect = (index) => {
    const updatedLocations = locations.map((location, idx) => ({
      ...location,
      active: idx === index
    }));
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
    setLocations(updatedLocations);
  };
  const getCurrentLocation = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const newLocation = {
        name: "Lieu actuel",
        longitude: coordinates.coords.longitude,
        latitude: coordinates.coords.latitude,
        active: true
      };
      let updatedLocations = JSON.parse(localStorage.getItem('locations')) || [];
      updatedLocations.push(newLocation);
      localStorage.setItem('locations', JSON.stringify(updatedLocations));
      setLocations(updatedLocations);
    } catch (error) {
      console.error("Erreur lors de l'obtention de la position actuelle:", error);
    }
  };

  const handleCurrentLocationChange = async (event) => {
    if (event.target.checked) {
      await getCurrentLocation();
    }
  };

  return (
    <footer>
      <div className="lieu">
        <b>Adresse de livraison</b>
        <form className="newAdress" onSubmit={handleAddressSubmit}>
          <input
            type="text"
            placeholder="Entrez une nouvelle adresse"
            value={addressInput}
            onChange={handleAddressInputChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        
        <div className="address-suggestions">
          {suggestions.length > 0 &&
            suggestions.map((suggestion, index) => (
              <div key={index} onClick={() => handleSuggestionClick(suggestion)}>
                <p>{suggestion.display_name}</p>
                <p className="modif">Choisir</p>
              </div>
            ))}
        </div>
        <div>
          <input type="radio" name="Lieuactuel" id="Lieuactuel" onChange={handleCurrentLocationChange}/>
          <label htmlFor="Lieuactuel">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Lieu actuel</p>
            </div>
          </label>
        </div>
        {locations.map((location, index) => (
          <div key={index}>
            <input
            type="radio"
            name="Lieuactuel"
            id={`location-${index}`}
            checked={location.actif}
            onChange={() => handleLocationSelect(index)}
          />
            <label htmlFor={`location-${index}`}>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{location.name}</p>
              </div>
              <p className="modif" onClick={() => handleDeleteLocation(index)}>Supprimer</p>
            </label>
          </div>
        ))}
      </div>
      <nav>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHouse} />
            <p>Accueil</p>
          </Link>
          <Link to={"/Search"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <p>Parcourir</p>
          </Link>
          <Link to={"/Basket"}>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Paniers</p>
          </Link>
          <Link to={"/Account"}>
            <FontAwesomeIcon icon={faUser} />
            <p>Compte</p>
          </Link>
        </nav>
    </footer>
  );
};

export default Footer;
