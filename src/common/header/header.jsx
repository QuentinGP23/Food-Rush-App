import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faUser, faReceipt, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass as fasMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import filtre from "../../assets/pictos/sliders.svg";
import { Link } from 'react-router-dom';
import animationHeader from './headerAnim.js';
import lieuJs from'./../footer/lieu.js'

const Header = () => {
  const toggleConnected = () => {
    const connectedDiv = document.querySelector('.connected');
    connectedDiv.style.display = (connectedDiv.style.display === 'none' || connectedDiv.style.display === '') ? 'block' : 'none';
  };
  const toggleLocation = () => {
    const lieuDiv = document.querySelector('.lieu');
    lieuDiv.classList.toggle('up');
  };
  return (
    <header>
      
        <div className="t">
          <div className="changeLocation" onClick={toggleLocation}>
            <p className="sub">Maintenant</p>
            <b>Adresse de livraison</b>
          </div>
          <div className="account" onClick={toggleConnected}>
            <FontAwesomeIcon icon={farUser} />
            <div className='connected'>
              <ul>
                <li>
                  <Link><FontAwesomeIcon icon={faUser} />Mon compte</Link>
                </li>
                <li>
                  <Link><FontAwesomeIcon icon={faReceipt} />Mes commandes</Link>
                </li>
                <li>
                  <Link><FontAwesomeIcon icon={faRightFromBracket} />Se déconnecter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      <div className="b">
        <div>
          <FontAwesomeIcon icon={fasMagnifyingGlass} />
          <input
            type="text"
            name="headSearch"
            id="headSearch"
            placeholder="restaurants, commerces, plats"
          />
        </div>
        <img src={filtre} alt="filter" />
      </div>
      <script src={animationHeader}></script>
      <script src={lieuJs} ></script>
    </header>
  );
};

export default Header;
