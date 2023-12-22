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
    const initLocations = async () => {
      let savedLocations = JSON.parse(localStorage.getItem('locations')) || [];
      let currentLocationExists = savedLocations.some(location => location.name === "Lieu actuel");
      if (!currentLocationExists) {
        const currentLocation = await getCurrentLocation();
        if (currentLocation) {
          savedLocations.unshift(currentLocation);
        }
      }
      savedLocations = savedLocations.map(location => ({
        ...location,
        active: location.name === "Lieu actuel"
      }));
      setLocations(savedLocations);
      localStorage.setItem('locations', JSON.stringify(savedLocations));
    };
    initLocations();
  }, []);
  const getCurrentLocation = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      return {
        name: "Lieu actuel",
        longitude: coordinates.coords.longitude,
        latitude: coordinates.coords.latitude,
        active: true
      };
    } catch (error) {
      console.error("Erreur lors de l'obtention de la position actuelle:", error);
      setError("Impossible de récupérer la position actuelle");
      return null;
    }
  };
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
    let newLocations = [...locations].map(location => ({ ...location, active: false }));
    newLocations.push({
      name: suggestion.display_name,
      longitude: suggestion.lon,
      latitude: suggestion.lat,
      active: true
    });
    localStorage.setItem('locations', JSON.stringify(newLocations));
    setSuggestions([]);
    setAddressInput('');
    setLocations(newLocations);
  };
  const handleDeleteLocation = (index) => {
    let updatedLocations = [...locations];
    const wasActive = updatedLocations[index].active;
    updatedLocations.splice(index, 1);
    if (wasActive) {
      const currentLocationIndex = updatedLocations.findIndex(
        location => location.name === "Lieu actuel"
      );
      if (currentLocationIndex > -1) {
        updatedLocations = updatedLocations.map((location, idx) => ({
          ...location,
          active: idx === currentLocationIndex
        }));
      }
    }
    setLocations(updatedLocations);
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
  };
  const handleLocationSelect = (index) => {
    const updatedLocations = locations.map((location, idx) => ({
      ...location,
      active: idx === index
    }));
    localStorage.setItem('locations', JSON.stringify(updatedLocations));
    setLocations(updatedLocations);
  };

  const handleCurrentLocationChange = async (event) => {
    if (event.target.checked) {
      const currentLocation = await getCurrentLocation();
      if (currentLocation) {
        let updatedLocations = [...locations];
        updatedLocations = updatedLocations.map(location => ({
          ...location,
          active: false
        }));
        updatedLocations.unshift(currentLocation);
        setLocations(updatedLocations);
        localStorage.setItem('locations', JSON.stringify(updatedLocations));
      }
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
        {locations.map((location, index) => (
          <div key={index}>
            <input
              type="radio"
              name="Lieuactuel"
              id={`location-${index}`}
              checked={location.active}
              onChange={() => handleLocationSelect(index)}
            />
            <label htmlFor={`location-${index}`}>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>{location.name}</p>
              </div>
              {location.name !== "Lieu actuel" && (
                <p className="modif" onClick={() => handleDeleteLocation(index)}>Supprimer</p>
              )}
            </label>
          </div>
        ))}
      </div>
      <nav>
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHouse} />
            <p>Accueil</p>
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
