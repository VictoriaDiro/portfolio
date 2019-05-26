import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer__container">
        <h4 className="make__with">Make with <i className="fas fa-heart"></i> by Victoria Díaz [ HTML, CSS, JavaScript, React ]·················· Background designed by <a href="http://www.freepik.com">Starline / Freepik</a></h4>
      </div>
    )
  }
}

export default Footer;