import React from 'react';
import adobeIllustrator from '../../images/skills-icons/adobe-illustrator.png';
import adobePhotoshop from '../../images/skills-icons/adobe-photoshop.png';
import adobePremiere from '../../images/skills-icons/adobe-premiere.png';
import analytics from '../../images/skills-icons/analytics.png';
import css3 from '../../images/skills-icons/css3.png';
import github from '../../images/skills-icons/github.png';
import gitlab from '../../images/skills-icons/gitlab.png';
import googleAdwords from '../../images/skills-icons/google-adwords.png';
import html5 from '../../images/skills-icons/html5.png';
import javascript from '../../images/skills-icons/javascript.png';
import microsofOffice from '../../images/skills-icons/microsoft-office.png';
import prestashop from '../../images/skills-icons/prestashop.png';
import react from '../../images/skills-icons/react.png';
import slack from '../../images/skills-icons/slack.jpg';
import trello from '../../images/skills-icons/trello.png';
import wordpress from '../../images/skills-icons/wordpress.png';


import './Main.scss';

class Main extends React.Component {
  render () {
    return (
      <div className="main-container">

        <div className="main-content">
          <div className="main-background"></div>
          <p className="main-item main-title">Maquetación web</p>
          <p className="main-item main-subtitle">HTML, CSS, Sass, JavaScript, React</p>
        </div>



        <div className="skills-container">
          <div className="programming-container">
            <h3>Programación</h3>
            <img className="skill-item" src={html5} alt="HTLM5" />
            <img className="skill-item" src={css3} alt="CSS·" />
            <img className="skill-item" src={javascript} alt="JavaScript" />
            <img className="skill-item" src={react} alt="React" />
          </div>
          <div className="marketing-container">
            <h3>Marketing</h3>
            <img className="skill-item" src={analytics} alt="Google Analytics" />
            <img className="skill-item" src={googleAdwords} alt="Google Adwords" />
            <img className="skill-item" src={wordpress} alt="Wordpress" />
            <img className="skill-item" src={prestashop} alt="Prestashop" />
          </div>
          <div className="audiovisual-container">
            <h3>Audiovisuales</h3>
            <img className="skill-item" src={adobeIllustrator} alt="Adobe Illustrator" />
            <img className="skill-item" src={adobePhotoshop} alt="Adobe Photoshop" />
            <img className="skill-item" src={adobePremiere} alt="Adobe Premiere" />
          </div>
          <div className="communication-container">
            <h3>Comunicación y gestión</h3>
            <img className="skill-item" src={microsofOffice} alt="Microsoft Office" />
            <img className="skill-item" src={slack} alt="Slack" />
            <img className="skill-item" src={trello} alt="Trello" />
            <img className="skill-item" src={github} alt="Github" />
            <img className="skill-item" src={gitlab} alt="Gitlab" />
            {/* Jira */}
          </div>
        </div>

          {/*
          <div className="projects__container">
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
            <img className="project-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          </div>
          */}
        </div>
    )
  }
}

export default Main;
