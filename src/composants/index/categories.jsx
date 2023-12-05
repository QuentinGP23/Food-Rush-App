import React from 'react';
import burgerImage from '../../assets/pictos/burger.png';
import marcheImage from '../../assets/pictos/Marche.png';
import offreImage from '../../assets/pictos/offre.png';

const Categories = () => {
  return (
    <section className="cate container">
      <a href="#">
        <div className="n-1cate">
          <img src={burgerImage} alt="pictogramme burger" />
          Restaurants
        </div>
      </a>
      <a href="#">
        <div className="n-1cate">
          <img src={marcheImage} alt="pictogramme courses" />
          Courses
        </div>
      </a>
      <a href="#">
        <div className="n-1cate">
          <img src={offreImage} alt="pictogramme offres" />
          Offres
        </div>
      </a>
    </section>
  );
};

export default Categories;
