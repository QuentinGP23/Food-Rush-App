import React from 'react';
import Footer from './../../common/footer/footer';
import './../../base/ds.scss'
import { Link } from "react-router-dom";
import './../../common/footer/footer.scss'
import './basket.scss'
const Basket = () => {
  return (
    <div id='Basket'>
      <main>
        <section className='container'>
          <h1>Panier</h1>
          <div className='EmptyBasket'>
              <h2>Vous n'avez pas encore de commandes au panier</h2>
              <Link to={'/'} className='btn1'>Commander</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Basket;
