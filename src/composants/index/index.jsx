import React from "react";
import Categories from './../index/categories';
import Cards from './../index/cards';
import LocalisationPopup from './../popups/localisation';
import Header from './../../common/header/header';
import Footer from './../../common/footer/footer';
import './../../index.scss';
import './../../base/ds.scss'
import './../../common/footer/footer.scss'
import './../../common/header/header.scss'
const HomePage = () => {
  return (
    <div id="Home">
        <LocalisationPopup />
        <Header />
        <main>
        <Categories />
        <Cards />
        </main>
        <Footer />
    </div>
  );
};

export default HomePage;
