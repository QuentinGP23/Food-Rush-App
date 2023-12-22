import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import restaurantsData from "../../donnees/restaurants.json";
import {
  faArrowLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./restau.scss";
const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [quantities, setQuantities] = useState([]);
  const [prePanier, setPrePanier] = useState({ plats: [], prixTotal: 0 });
  const { index } = useParams();
  useEffect(() => {
    const restaurantIndex = parseInt(index, 10);
    const storedRestaurants = JSON.parse(localStorage.getItem("restaurants")) || restaurantsData.restaurants;
    const selectedRestaurant = storedRestaurants[restaurantIndex];
    if (selectedRestaurant) {
      setRestaurant(selectedRestaurant);
      setQuantities(new Array(selectedRestaurant.menu.length).fill(0));
    }
  }, [index]);
  useEffect(() => {
    if (restaurant) {
      updatePrePanier();
    }
  }, [quantities, restaurant]);
  const updatePrePanier = (currentQuantities) => {
    if (restaurant && currentQuantities) {
      const plats = restaurant.menu
        .map((item, index) => ({
          titre: item.title,
          prixTotal: currentQuantities[index] * item.price,
          quantité: currentQuantities[index],
        }))
        .filter(plat => plat.quantité > 0);
      const prixTotalSansLivraison = plats.reduce((acc, plat) => acc + plat.prixTotal, 0);
      const newPrePanier = {
        restaurant: restaurant.name,
        livprice: restaurant.livprice,
        plats,
        prixTotal: parseFloat((prixTotalSansLivraison + restaurant.livprice).toFixed(2)), 
      };
      localStorage.setItem("prePanier", JSON.stringify(newPrePanier));
      setPrePanier(newPrePanier);
    }
  };
  const incrementQuantity = (idx) => {
    setQuantities((currentQuantities) => {
      const newQuantities = currentQuantities.map((qty, index) => index === idx ? Math.min(qty + 1, 9) : qty);
      updatePrePanier(newQuantities);
      return newQuantities;
    });
  };
  const decrementQuantity = (idx) => {
    setQuantities((currentQuantities) => {
      const newQuantities = currentQuantities.map((qty, index) => index === idx ? Math.max(qty - 1, 0) : qty);
      updatePrePanier(newQuantities);
      return newQuantities;
    });
  };
  return (
    <section className="container restau">
      {restaurant && (
        <div>
          <Link to={"/"} className="return">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h1>{restaurant.name}</h1>
          <p className="descri">{restaurant.description}</p>
          <p className="VilleMenu">{restaurant.city} - {restaurant.categories.join(", ")}</p>
          {restaurant.menu.map((item, idx) => (
            <div key={idx} className="menu">
              <div
                className="itemImg"
                style={{
                  backgroundImage: `url(${
                    item.image ||
                    "https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg"
                  })`,
                }}
              ></div>
              <div>
                <b>{item.title}</b>
                <p>{item.description}</p>
                <div className="compt">
                  <div className="moins" onClick={() => decrementQuantity(idx)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <input type="text" value={quantities[idx]} readOnly />
                  <div className="plus" onClick={() => incrementQuantity(idx)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
              </div>
              <p className="itemPrice">{item.price}€</p>
            </div>
          ))}
          <h2>Résumé commande</h2>
          {prePanier.plats.length === 0 ? (
            <p className="sheee">Aucun plat ajouté</p>
          ) : (
            <div className="resume">
              {prePanier.plats.map((plat, index) => (
                <div key={index}>
                  <b>{plat.titre}</b>
                  <p>Quantité : {plat.quantité}</p>
                  <p>prix : {plat.prixTotal.toFixed(2)}€</p>
                </div>
              ))}
              <p className="sheee1">Prix de livraison : {restaurant.livprice.toFixed(2)}€</p>
              <p className="sheee">Prix total : {prePanier.prixTotal.toFixed(2)}€</p>
              <Link to={'/Basket'} className="btn1">Ajouter au panier</Link>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default RestaurantDetails;
