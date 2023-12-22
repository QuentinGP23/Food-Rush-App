import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faUser, faReceipt, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass as fasMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link , useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate();
  const storedUserData = JSON.parse(localStorage.getItem("user")) || {};
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/Account'); 
  };
  return (
    <header>
        <div className="t">
          <div className="changeLocation" onClick={toggleLocation}>
            <b>Adresse de livraison</b>
          </div>
          <div className="account" onClick={toggleConnected}>
            <FontAwesomeIcon icon={farUser} />
            <div className='connected'>
              <ul>
                <li>
                  <Link to={'/Account'}><FontAwesomeIcon icon={faUser} />Mon compte</Link>
                </li>
                <li>
                  <Link onClick={handleLogout} to={'/Account'}><FontAwesomeIcon icon={faRightFromBracket} />Se déconnecter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      {/* <div className="b">
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
      </div> */}
      <script src={lieuJs} ></script>
    </header>
  );
};

export default Header;
