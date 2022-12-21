import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinks } from './HeaderLinks';
import './header.css';
//@ts-ignore
import blast from '../assets/BLAST.svg';
//@ts-ignore
import hamburger from '../assets/hamburger.svg';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="header">
        <div className="header-img">
          <Link to="/">
            <img src={blast} alt="logo" />
          </Link>
        </div>

        <div className="header-links">
          <HeaderLinks />
        </div>
      </div>
      <div className="nav-button">
        <button type="button">Log out</button>
      </div>
      <div className="header-menu">
        <img src={hamburger} onClick={() => setToggleMenu(!toggleMenu)} alt="menu" />
        {toggleMenu && (
          <div className="header-menu-container">
            <div className="header-menu-container-links">
              <HeaderLinks />
            </div>
            <div className="header-menu-container-button">
              <button type="button">Log out</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
