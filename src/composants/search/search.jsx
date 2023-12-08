import React from 'react';
import Footer from './../../common/footer/footer';
import './../../base/ds.scss';
import './../../common/footer/footer.scss';
import './search.scss';
import SearchBar from './searchBar';

const Search = () => {
  return (
    <div id="Search">
      <main>
        <section className='container'>
            <SearchBar />
            <section className="searchCate">
                <div className="searchCateCard">
                    <div className='t'></div>
                    <div className="b"><p>Fast food</p></div>
                </div>
                <div className="searchCateCard">
                    <div className='t'></div>
                    <div className="b"><p>Petit-dej et brunch</p></div>
                </div>
                <div className="searchCateCard">
                    <div className='t'></div>
                    <div className="b"><p>pizza</p></div>
                </div>
            </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
