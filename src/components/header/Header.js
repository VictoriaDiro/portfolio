import React from 'react'
import './Header.css';

class Header extends React.Component {
  render () {
    return (
      <div className="header__container">
        <h1 className="title">VICTORIA DIAZ · Front-End Developer</h1>

        <ul className="navbar">
          <li className="navbar__item more__info"><a href="pages/ experience.html">Más información</a></li>
          <li className="navbar__item contact"><a href="pages/contact.html">Contacto</a></li>
        </ul>
      </div>
    )
  }
}

export default Header;
