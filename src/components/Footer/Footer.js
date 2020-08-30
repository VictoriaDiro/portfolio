import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer__container">
        <h4 className="footer__text">Make with <i className="fas fa-heart"></i> by DiroVic</h4>
        <h4 className="footer__info">info@dirovic.com</h4>
      </footer>
    )
  }
}

export default Footer;
