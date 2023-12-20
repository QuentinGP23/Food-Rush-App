import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./../../base/ds.scss";
import "./account.scss";
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
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
    if (formData.password === formData.confirmPassword) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        address: formData.address,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      console.log("Utilisateur ajouté:", newUser);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      console.log("Les mots de passe ne correspondent pas.");
    }
    navigate('/');
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
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Adresse"
            value={formData.address}
            onChange={handleChange}
          />
          <button type="submit" className="btn1">
            S'inscrire
          </button>
          <p>
            Déjà membre ? <a onClick={onSwitch}>Connectez-vous</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;
