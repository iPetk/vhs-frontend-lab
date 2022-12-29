import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BlastLogo, Hamburger } from '@assets';

import { HeaderLinks } from './HeaderLinks';

import './header.css';

export const Header = () => {
  const { t } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="header">
        <div className="header-img">
          <Link to="/">
            <BlastLogo />
          </Link>
        </div>

        <div className="header-links">
          <HeaderLinks />
        </div>
      </div>
      <div className="nav-button">
        <button type="button">{t('header.logOut')}</button>
      </div>

      <div className="header-menu">
        <Hamburger onClick={() => setToggleMenu(!toggleMenu)} />
        {toggleMenu && (
          <div className="header-menu-container">
            <div className="header-menu-container-links">
              <HeaderLinks />
            </div>
            <div className="header-menu-container-button">
              <button type="button">{t('header.logOut')}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
