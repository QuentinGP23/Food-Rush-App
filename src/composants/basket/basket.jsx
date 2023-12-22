import React, { useState, useEffect } from 'react';
import Footer from './../../common/footer/footer';
import './../../base/ds.scss'
import { Link } from "react-router-dom";
import './../../common/footer/footer.scss'
import './basket.scss';
const Basket = () => {
  const [prePanier, setPrePanier] = useState(null);

  useEffect(() => {
    const storedPrePanier = JSON.parse(localStorage.getItem('prePanier'));
    setPrePanier(storedPrePanier);
  }, []);
  const handleCheckout = () => {
    localStorage.removeItem('prePanier');
    setPrePanier(null);
  };
  return (
    <div id='Basket'>
      <main>
        <section className='container'>
          <h1>Panier</h1>
          {prePanier && prePanier.plats && prePanier.plats.length > 0 ? (
            <div>
              <h2>Votre commande</h2>
              <p>Nom du restaurant : {prePanier.restaurant}</p>
              {prePanier.plats.map((plat, index) => (
                <div key={index}>
                  <b>{plat.titre}</b>
                  <p>Quantité : {plat.quantité}</p>
                  <p>Prix : {plat.prixTotal.toFixed(2)}€</p>
                </div>
              ))}
              <p>Prix total : {prePanier.prixTotal.toFixed(2)}€</p>
              <Link to={'/'} className="btn1" onClick={handleCheckout}>Commander</Link>
            </div>
          ) : (
            <div className='EmptyBasket'>
              <h2>Vous n'avez pas encore de commandes au panier</h2>
              <Link to={'/'} className='btn1'>Commander</Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Basket;