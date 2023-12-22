import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import restaurantsData from "../../donnees/restaurants.json";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { index } = useParams();

  useEffect(() => {
    const restaurantIndex = parseInt(index, 10);
    const storedRestaurants =
      JSON.parse(localStorage.getItem("restaurants")) ||
      restaurantsData.restaurants;
    const selectedRestaurant = storedRestaurants[restaurantIndex];
    setRestaurant(selectedRestaurant);
  }, [index]);
  return (
    <section className="container ">

      {restaurant && (
        <div>
            <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} /></Link>
            <h1>{restaurant.name}</h1>
            <p className="descri">{restaurant.description}</p>
            <p className="VilleMenu">{restaurant.city}</p>
            <h2>{restaurant.menu.title}</h2>
        </div>
        
      )}
    </section>
  );
};

export default RestaurantDetails;
