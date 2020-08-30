import React from 'react';
import adobeIllustrator from '../../images/skills-icons/audiovisuals/adobe-illustrator.png';
import adobePhotoshop from '../../images/skills-icons/audiovisuals/adobe-photoshop.png';
import adobePremiere from '../../images/skills-icons/audiovisuals/adobe-premiere.png';
import analytics from '../../images/skills-icons/marketing/analytics.png';
import css3 from '../../images/skills-icons/programming/css3.png';
import github from '../../images/skills-icons/communication/github.png';
import gitlab from '../../images/skills-icons/communication/gitlab.png';
import googleAdwords from '../../images/skills-icons/marketing/google-adwords.png';
import html5 from '../../images/skills-icons/programming/html5.png';
import javascript from '../../images/skills-icons/programming/javascript.png';
import microsofOffice from '../../images/skills-icons/communication/microsoft-office.png';
import prestashop from '../../images/skills-icons/marketing/prestashop.png';
import react from '../../images/skills-icons/programming/react.png';
import slack from '../../images/skills-icons/communication/slack.png';
import trello from '../../images/skills-icons/communication/trello.png';
import wordpress from '../../images/skills-icons/marketing/wordpress.png';
import './Main.scss';

class Main extends React.Component {
  render () {
    return (
      <div className="main-container">

        <div className="main-content">
          <div className="main-background"></div>
          <p className="main-item main-title">Maquetación web & UX/UI</p>
          <p className="main-item main-subtitle">HTML, CSS, Sass, JavaScript, React</p>
        </div>

        <div className="skills-container">
          <div className="programming-container">
            <h3>Programación</h3>
            <div className="skill__image__container">
              <img className="skill-item" src={html5} alt="HTLM5" />
              <img className="skill-item" src={css3} alt="CSS·" />
              <img className="skill-item" src={javascript} alt="JavaScript" />
              <img className="skill-item" src={react} alt="React" />
            </div>
          </div>
          <div className="marketing-container">
            <h3>Marketing</h3>
            <div className="skill__image__container">
              <img className="skill-item" src={wordpress} alt="Wordpress" />
              <img className="skill-item" src={prestashop} alt="Prestashop" />
              <img className="skill-item" src={analytics} alt="Google Analytics" />
            </div>
          </div>
          <div className="audiovisual-container">
            <h3>Audiovisuales</h3>
            <div className="skill__image__container">
              <img className="skill-item" src={adobePhotoshop} alt="Adobe Photoshop" />
              <img className="skill-item" src={adobePremiere} alt="Adobe Premiere" />
            </div>
          </div>
          <div className="communication-container">
            <h3>Gestión</h3>
            <div className="skill__image__container">
              <img className="skill-item" src={microsofOffice} alt="Microsoft Office" />
              <img className="skill-item" src={github} alt="Github" />
              <img className="skill-item" src={gitlab} alt="Gitlab" />
            </div>
          </div>
        </div>

        <div className="projects__container">
          <a className="projects__item" href="https://mupalasa.netlify.app/#/">
            <img src="https://via.placeholder.com/300x200/fabada/808080" alt="project-icon"></img>
          </a>
          <a className="projects__item" href="https://mupalasa.netlify.app/#/">
            <img src="https://via.placeholder.com/300x200/fabada/808080" alt="project-icon"></img>
          </a>
          <a className="projects__item" href="https://mupalasa.netlify.app/#/">
            <img src="https://via.placeholder.com/300x200/fabada/808080" alt="project-icon"></img>
          </a>
        </div>
      </div>

    )
  }
}

export default Main;
