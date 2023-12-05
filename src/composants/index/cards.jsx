import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Cards = () => {
  return (
    <section className="container"><h2>
          En vedette
          <div className="voirplus">
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
      </h2><section className="cards">
              <div className="slider">
                  <div className="card">
                      <div className="t">
                          <div className="time"><p><b>30 - 50</b> min</p></div>
                          <div className="promo1">Commandez pour 25 €</div>
                          <div className="promo2">Profitez de -30%</div>
                          <div className="heart"><FontAwesomeIcon icon={faHeart} /></div>
                      </div>
                      <div className="b">
                          <a href=""><b>Mali food</b></a>
                          <p className="note"><i className="fa-solid fa-star"></i>4.5 Excellent <i>(210)</i></p>
                          <p className="km">5.5km<span>Livraison offerte</span></p>
                      </div>
                  </div>
              </div>
          </section></section>
  );
};

export default Cards;
