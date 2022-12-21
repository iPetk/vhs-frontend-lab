import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
//@ts-ignore
import blast from '../assets/BLAST.svg';
//@ts-ignore
import hamburger from '../assets/hamburger.svg';

const Links = () => {
  return (
    <>
      <Link to="/" style={{ color: 'var(--color-orange)' }}>
        Home
      </Link>
      <Link to="/explore" style={{ color: 'var(--color-yellow)' }}>
        Discovery
      </Link>
      <Link to="/create" style={{ color: 'var(--color-lilac)' }}>
        Add VHS
      </Link>
    </>
  );
};

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="header">
        <div className="header-img">
          <img src={blast} alt="logo" />
        </div>

        <div className="header-links">
          <Links />
        </div>
      </div>
      <div className="nav-button">
        <button type="button">Log out</button>
      </div>
      <div className="header-menu">
        <img src={hamburger} onClick={() => setToggleMenu(!toggleMenu)} />
        {toggleMenu && (
          <div className="header-menu-container">
            <div className="header-menu-container-links">
              <Links />
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
