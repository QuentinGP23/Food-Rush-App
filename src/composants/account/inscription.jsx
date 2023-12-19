import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./../../base/ds.scss";
import "./account.scss";
import Footer from "./../../common/footer/footer";

const SignUpForm = ({ onSwitch }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="container">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="passwd">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              onClick={togglePassword}
              icon={passwordShown ? faEyeSlash : faEye}
              className="eye-icon"
            />
          </div>
          <div className="passwd">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmez le mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn1">
            S'inscrire
          </button>
          <p>
            Déjà membre ? <a onClick={onSwitch}>Connectez-vous</a>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default SignUpForm;
