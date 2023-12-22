import React, { useState, useEffect } from "react";
import Footer from "./../../common/footer/footer";
import "./../../base/ds.scss";
import { Link } from "react-router-dom";
import "./../../common/footer/footer.scss";
import "./basket.scss";
const Basket = () => {
  const [prePanier, setPrePanier] = useState(null);

  useEffect(() => {
    const storedPrePanier = JSON.parse(localStorage.getItem("prePanier"));
    setPrePanier(storedPrePanier);
  }, []);

  const handleCheckout = () => {
    localStorage.removeItem("prePanier");
    setPrePanier(null);
  };

  const handleRemoveItem = (indexToRemove) => {
    if (prePanier && prePanier.plats) {
      const updatedPlats = prePanier.plats.filter(
        (_, index) => index !== indexToRemove
      );
      const updatedPrixTotal =
        updatedPlats.reduce((acc, plat) => acc + plat.prixTotal, 0) +
        (updatedPlats.length > 0 ? prePanier.livprice : 0);
      const updatedPrePanier = {
        restaurant: prePanier.restaurant,
        livprice: updatedPlats.length > 0 ? prePanier.livprice : 0,
        plats: updatedPlats,
        prixTotal: updatedPrixTotal,
      };
      localStorage.setItem("prePanier", JSON.stringify(updatedPrePanier));
      setPrePanier(updatedPrePanier);
    }
  };
  return (
    <div id="Basket">
      <main>
        <section className="container">
          <h1>Panier</h1>
          {prePanier && prePanier.plats && prePanier.plats.length > 0 ? (
            <div>
              <h2>Votre commande</h2>
              <h3>{prePanier.restaurant}</h3>
              {prePanier.plats.map((plat, index) => (
                <div key={index} className="platBasket">
                  <div>
                    <b>{plat.titre}</b>
                    <p>Quantité : {plat.quantité}</p>
                    <p>Prix : {plat.prixTotal.toFixed(2)}€</p>
                  </div>
                  <div>
                    <p class="modif" onClick={() => handleRemoveItem(index)}>Supprimer</p>
                  </div>
                </div>
              ))}
              <section className="total">
                <p>Prix livraison : {prePanier.livprice.toFixed(2)}€</p>
                <p>Prix total : {prePanier.prixTotal.toFixed(2)}€</p>
              </section>
              <Link to={"/"} className="btn1" onClick={handleCheckout}>
                Commander
              </Link>
            </div>
          ) : (
            <div className="EmptyBasket">
              <h2>Panier vide</h2>
              <Link to={"/"} className="btn1">
                Commander
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Basket;
