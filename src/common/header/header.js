import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
    <header>
      <div className="t">
        <div>
          <p className="sub">Maintenant</p>
          <b>Lieu actuel</b>
        </div>
        <div className="account">
          <FontAwesomeIcon icon="fa-regular fa-user" />
        </div>
      </div>
      <div className="b">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            name="headSearch"
            id="headSearch"
            placeholder="restaurants, commerces, plats"
          />
        </div>
        <img src="" alt="filter" />
      </div>
    </header>
  );
  
  export default Header;
  