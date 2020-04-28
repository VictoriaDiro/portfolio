import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render () {
    return (
      <header className="header__container">
        <Link to="/" className="header-title">Victoria Díaz</Link>
          <nav className="header-navbar">
            <ul className="header-navbar__list">
              <li className="header-navbar__item moreinfo">
                <Link to="/more-info">Más información</Link>
              </li>
              <li className="header-navbar__item contact">
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Header;
