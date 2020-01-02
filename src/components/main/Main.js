import React from 'react';
import VictoriaDiro from './VictoriaDiroPhoto.jpeg';
import adobeIllustrator from './skills-icons/adobe-illustrator.png';
import adobePhotoshop from './skills-icons/adobe-photoshop.png';
import adobePremiere from './skills-icons/adobe-premiere.png';
import analytics from './skills-icons/analytics.png';
import css3 from './skills-icons/css3.png';
import github from './skills-icons/github.png';
import gitlab from './skills-icons/gitlab.png';
import googleAdwords from './skills-icons/google-adwords.png';
import html5 from './skills-icons/html5.png';
import javascript from './skills-icons/javascript.png';
import microsofOffice from './skills-icons/microsoft-office.png';
import prestashop from './skills-icons/prestashop.png';
import react from './skills-icons/react.png';
import slack from './skills-icons/slack.jpg';
import trello from './skills-icons/trello.png';
import wordpress from './skills-icons/wordpress.png';


import './Main.scss';

class Main extends React.Component {
  render () {
    return (
      <div className="main__container">
        <div className="avatar" style={{ backgroundImage: `url(${VictoriaDiro})` }} alt=""></div>

        <p className="description">Enamorada del mundo cinematográfico luché mucho por hacerme un hueco en cualquier rodaje que llegara a mis oídos, trabajando de sol a sol. 
      
        Ahora, años después, he decidido reinventarme como Front-End Developer y aprovechar así, las competencias adquiridas como esfuerzo, adaptación a nuevos entornos y trabajo en equipo. 
      
        Además de esto, soy una persona muy organizada a la que le gusta la planificación de tareas y sociable.</p>

        <div className="skills__project-container">
          <h2 className="skills__title">Mis Habilidades</h2>
          <div className="skills__container">

            <h3>Marketing</h3>
            <img className="skill-item" src={analytics} alt="Google Analytics" />
            <img className="skill-item" src={googleAdwords} alt="Google Adwords" />
            <img className="skill-item" src={wordpress} alt="Wordpress" />
            <img className="skill-item" src={prestashop} alt="Prestashop" />

            <h3>Audiovisuales</h3>
            <img className="skill-item" src={adobeIllustrator} alt="Adobe Illustrator" />
            <img className="skill-item" src={adobePhotoshop} alt="Adobe Photoshop" />
            <img className="skill-item" src={adobePremiere} alt="Adobe Premiere" />

            <h3>Programación</h3>
            <img className="skill-item" src={html5} alt="HTLM5" />
            <img className="skill-item" src={css3} alt="CSS·" />
            <img className="skill-item" src={javascript} alt="JavaScript" />
            <img className="skill-item" src={react} alt="React" />

            <h3>Comunicación y gestión</h3>
            <img className="skill-item" src={microsofOffice} alt="Microsoft Office" />
            <img className="skill-item" src={slack} alt="Slack" />
            <img className="skill-item" src={trello} alt="Trello" />
            <img className="skill-item" src={github} alt="Github" />
            <img className="skill-item" src={gitlab} alt="Gitlab" />


            {/* Jira */}
 
          </div>
          
          <h2 className="proyects">Mis Proyectos</h2>
          <div className="projects__container">


          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
          <img className="skill-item" src="https://via.placeholder.com/300/fabada/808080" alt="project-icon" />
        
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
