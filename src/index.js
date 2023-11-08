import React from 'react';
import ReactDOM from 'react-dom/client';
import './base/ds.scss';
import './common/header/header.scss';
import './index.scss';
import Header from './common/header/header';
import Categories from './composants/index/categories';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
    <Categories />
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
