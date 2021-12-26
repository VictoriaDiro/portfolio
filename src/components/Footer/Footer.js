import React from 'react';
import './Footer.scss';
import linkedin from '../../assets/images/contact-icons/linkedin.png';
import github from '../../assets/images/contact-icons/github.png';


class Footer extends React.Component {
  render () {
    return (
      <footer className="footer__container">
        <div className="footer__header">
          <p>¿Quieres ponerte en contacto conmigo?</p>
        </div>
        <div className="links">
          <a className="linkedin" href="https://www.linkedin.com/in/victoriadiromaquetacion/" target="_blank">
            <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
          </a>
          <a className="github" href="https://github.com/VictoriaDiro" target="_blank">
            <img src={github} alt="Github" title="Github" />
          </a>
        </div>
        <h4 className="footer__text">Make with <i className="fas fa-heart"></i> by DiroVic</h4>
        <h4 className="footer__info">victoriadiro01@gmail.com</h4>
      </footer>
    )
  }
}

export default Footer;
