import React from 'react';
import { Link } from 'react-router-dom';
import PdfCV from '../../images/cv-victoria-diaz_cssed.pdf';
import './Header.scss';

class Header extends React.Component {
  render () {

    function openNewWindow () {
      const otherWindow = window.open();
      otherWindow.opener = null;
      otherWindow.location = PdfCV;
    }

    /*var otherWindow = window.open(); otherWindow.opener = null; otherWindow.location = href; return false;"*/

    return (
      <header className="header__container">
        <Link to="/" className="header-title">DiroVic</Link>
          <nav className="header-navbar">
            <ul className="header-navbar__list">
              <li className="download-cv">
                <button onClick={openNewWindow}>Descarga mi CV</button>
              </li>
              <li className="header-navbar__item moreinfo">
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Header;
