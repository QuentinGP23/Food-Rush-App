import React, { useState } from "react";
import usersData from "../../donnees/users.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./../../common/footer/footer.scss";
import "./../../base/ds.scss";
import "./account.scss";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = usersData.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Utilisateur connecté", user);
      navigate('/');
    } else {
      console.log("Identifiants incorrects");
    }
    navigate('/');
  };

  return (
    <div>
      <section className="container">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Adresse email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="passwd">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              onClick={togglePassword}
              icon={passwordShown ? faEyeSlash : faEye}
              className="eye-icon"
            />
          </div>
          <button type="submit" className="btn1">
            Connexion
          </button>
          <p>
            Pas encore membre ? <a onClick={onSwitch}>Inscrivez-vous</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
