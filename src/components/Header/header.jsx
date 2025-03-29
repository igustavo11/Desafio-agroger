import profil from "../../assets/img/Profile.jpg";

import "./header.scss";

const Header = () => {
  return (
    <header className="session-header">
      <div className="profile">
        <img src={profil} alt="Profile" className="photo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar personagem"
        />
      </div>
    </header>
  );
};

export default Header;
