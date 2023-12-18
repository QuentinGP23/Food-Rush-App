import React from "react";
import Header from "./../../common/header/header";
import Footer from "./../../common/footer/footer";
import UberAuth from "./uberAuthent";

import "./../../base/ds.scss";
import "./../../common/footer/footer.scss";
import "./../../common/header/header.scss";

const Account = () => {
  return (
    <div id="Account">
      <Header />
      <main>
        <h1>Page du compte</h1>
        <UberAuth />
      </main>
      <Footer />
    </div>
  );
};

export default Account;
