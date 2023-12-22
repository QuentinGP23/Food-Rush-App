import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import restaurantsData from "./../../donnees/restaurants.json";

const Cards = () => {
  const [restaurants, setRestaurants] = useState([]);
  const favorites = restaurants.filter((restaurant) => restaurant.fav);
  useEffect(() => {
    const storedRestaurants =
      JSON.parse(localStorage.getItem("restaurants")) ||
      restaurantsData.restaurants;
    setRestaurants(storedRestaurants);
  }, []);

  const topRatedRestaurants = [...restaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const toggleFavorite = (restaurantName) => {
    const updatedRestaurants = restaurants.map((restaurant) => {
      if (restaurant.name === restaurantName) {
        return { ...restaurant, fav: !restaurant.fav };
      }
      return restaurant;
    });
    setRestaurants(updatedRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  };

  const getRatingLabel = (rating) => {
    if (rating >= 4) {
      return "Excellent";
    } else if (rating >= 2.5) {
      return "Correct";
    } else {
      return "Mauvais";
    }
  };
  const sortedRestaurantsByName = [...restaurants]
  .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <section className="container">
      <h2>Favoris</h2>
      {favorites.length > 0 ? (
        <section className="cards">
          <div className="slider">
            {favorites.map((restaurant, index) => (
              <div key={index} className="card">
                <div className="t">
                  <div
                    className="heart"
                    onClick={() => toggleFavorite(restaurant.name)}
                  >
                    <FontAwesomeIcon
                      icon={restaurant.fav ? faHeartSolid : faHeartRegular}
                    />
                  </div>
                </div>
                <div className="b">
                  <Link to={`/restaurant/${index}`}>
                    <b>{restaurant.name}</b>
                  </Link>
                  <p className="note">
                    <i className="fa-solid fa-star"></i>
                    {restaurant.rating} {getRatingLabel(restaurant.rating)}
                  </p>
                  <p className="km">{restaurant.city}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <p className="noFav">Aucun favoris pour le moment</p>
      )}
      <h2>En vedette</h2>
      <section className="cards">
        <div className="slider">
          {topRatedRestaurants.map((restaurant, index) => (
            <div key={index} className="card">
              <div className="t">
                <div
                  className="heart"
                  onClick={() => toggleFavorite(restaurant.name)}
                >
                  <FontAwesomeIcon
                    icon={restaurant.fav ? faHeartSolid : faHeartRegular}
                  />
                </div>
              </div>
              <div className="b">
                <Link to={`/restaurant/${index}`}>
                  <b>{restaurant.name}</b>
                </Link>
                <p className="note">
                  <i className="fa-solid fa-star"></i>
                  {restaurant.rating} {getRatingLabel(restaurant.rating)}
                </p>
                <p className="km">{restaurant.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <h2>Près de chez vous</h2>
      <section className="cards">
        <div className="slider">
          {sortedRestaurantsByName.map((restaurant, index) => (
            <div key={restaurant.id || index} className="card">
              <div className="t">
                <div
                  className="heart"
                  onClick={() => toggleFavorite(restaurant.name)}
                >
                  <FontAwesomeIcon
                    icon={restaurant.fav ? faHeartSolid : faHeartRegular}
                  />
                </div>
              </div>
              <div className="b">
                <Link to={`/restaurant/${index}`}>
                  <b>{restaurant.name}</b>
                </Link>
                <p className="note">
                  <i className="fa-solid fa-star"></i>
                  {restaurant.rating} {getRatingLabel(restaurant.rating)}
                </p>
                <p className="km">{restaurant.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <h2>Tous les restaurants</h2>
      <section className="cards">
        <div className="slider">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="card">
              <div className="t">
                <div
                  className="heart"
                  onClick={() => toggleFavorite(restaurant.name)}
                >
                  <FontAwesomeIcon
                    icon={restaurant.fav ? faHeartSolid : faHeartRegular}
                  />
                </div>
              </div>
              <div className="b">
                <Link to={`/restaurant/${index}`}>
                  <b>{restaurant.name}</b>
                </Link>
                <p className="note">
                  <i className="fa-solid fa-star"></i>
                  {restaurant.rating} {getRatingLabel(restaurant.rating)}
                </p>
                <p className="km">{restaurant.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Cards;
