import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../base/ds.scss";
import "./account";
import "./account.scss";
import Footer from "./../../common/footer/footer";

const Connected = () => {
  return (
    <div className="connected">
      <h1>Compte</h1>
      <div className="PP">
      </div>
      <Link to={'/Account'} className="btn1">test</Link>
      <Footer />
    </div>
  );
};

export default Connected;
