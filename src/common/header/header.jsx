import filtre from"../../assets/pictos/sliders.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as farUser} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass as fasMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return(
    <header>
      <div className="t">
        <div>
          <p className="sub">Maintenant</p>
          <b>Lieu actuel</b>
        </div>
        <div className="account">
        <FontAwesomeIcon icon={farUser} />
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
    </header>
  )
};
  
  export default Header;
  