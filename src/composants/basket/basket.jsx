import React from 'react';
import Header from './../../common/header/header';
import Footer from './../../common/footer/footer';
import './../../base/ds.scss'
import './../../common/footer/footer.scss'
import './../../common/header/header.scss'
const Basket = () => {
  return (
    <div id='Basket'>
      <Header />
      <main>
        <h1>Page du panier</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Basket;
