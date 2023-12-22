import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../base/ds.scss";
import "./account";
import "./account.scss";
import Footer from "./../../common/footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

const Connected = () => {
  const navigate = useNavigate();
  const storedUserData = JSON.parse(localStorage.getItem("user")) || {};
  const [userData, setUserData] = useState(storedUserData);
  const [editMode, setEditMode] = useState({ lastName: false, firstName: false, address: false, email: false, phone: false, password: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/Account'); 
  };

  const toggleEditMode = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const handleUpdate = (field) => {
    localStorage.setItem("user", JSON.stringify(userData));
    toggleEditMode(field);
  };
  const [profileImage, setProfileImage] = useState('');

  const takePhoto = async () => {
    try {
      const cameraResult = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
      setProfileImage(cameraResult.webPath);
    } catch (error) {
      console.error('Erreur lors de la prise de la photo:', error);
    }
  };
  return (
    <div className="connected">
      <section className="container">
        <h1>Compte</h1>
        <div className="PP" onClick={takePhoto} style={{ backgroundImage: `url(${profileImage})` }}></div>
        <h2>Informations personelles</h2>
        <div className={`userInfo ${editMode.lastName ? '' : 'unable'}`}>
          <b>Nom</b>
          <input 
            type="text" 
            name="lastName" 
            value={userData.lastName || ""} 
            placeholder="Nom"
            onChange={handleInputChange}
            disabled={!editMode.lastName}
          />
          <FontAwesomeIcon 
            icon={editMode.lastName ? faCheck : faPen} 
            onClick={() => editMode.lastName ? handleUpdate('lastName') : toggleEditMode('lastName')} 
          />
        </div>
        
        <div className={`userInfo ${editMode.firstName ? '' : 'unable'}`}>
          <b>Prénom</b>
          <input 
            type="text" 
            name="firstName" 
            value={userData.firstName || ""} 
            placeholder="Nom"
            onChange={handleInputChange}
            disabled={!editMode.firstName}
          />
          <FontAwesomeIcon 
            icon={editMode.firstName ? faCheck : faPen} 
            onClick={() => editMode.firstName ? handleUpdate('firstName') : toggleEditMode('firstName')} 
          />
        </div>

        <div className={`userInfo ${editMode.address ? '' : 'unable'}`}>
          <b>Adresse de facturation</b>
          <input 
            type="text" 
            name="address" 
            value={userData.address || ""} 
            placeholder="Nom"
            onChange={handleInputChange}
            disabled={!editMode.address}
          />
          <FontAwesomeIcon 
            icon={editMode.address ? faCheck : faPen} 
            onClick={() => editMode.address ? handleUpdate('address') : toggleEditMode('address')} 
          />
        </div>
        
        <div className={`userInfo ${editMode.email ? '' : 'unable'}`}>
          <b>Email</b>
          <input 
            type="email" 
            name="email" 
            value={userData.email || ""} 
            placeholder="Nom"
            onChange={handleInputChange}
            disabled={!editMode.email}
          />
          <FontAwesomeIcon 
            icon={editMode.email ? faCheck : faPen} 
            onClick={() => editMode.email ? handleUpdate('email') : toggleEditMode('email')} 
          />
        </div>

        <div className={`userInfo ${editMode.phone ? '' : 'unable'}`}>
          <b>Téléphone</b>
          <input 
            type="tel" 
            name="phone" 
            value={userData.phone || ""} 
            placeholder="Nom"
            onChange={handleInputChange}
            disabled={!editMode.phone}
          />
          <FontAwesomeIcon 
            icon={editMode.phone ? faCheck : faPen} 
            onClick={() => editMode.phone ? handleUpdate('phone') : toggleEditMode('phone')} 
          />
        </div>

        <div className={`userInfo ${editMode.password ? '' : 'unable'}`}>
          <b>Mot de passe</b>
          <input 
            type="password" 
            name="password" 
            value={userData.password || ""} 
            placeholder="Nom"
            onChange={handleInputChange}
            disabled={!editMode.password}
          />
          <FontAwesomeIcon 
            icon={editMode.password ? faCheck : faPen} 
            onClick={() => editMode.password ? handleUpdate('password') : toggleEditMode('password')} 
          />
        </div>

        <Link to={"/"} onClick={handleLogout} className="btn1">
          Se déconnecter
        </Link>
      </section>
      <Footer />
    </div>
  );
};
export default Connected;