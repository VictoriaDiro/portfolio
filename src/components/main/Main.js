import React from 'react';
// import VictoriaDiro from './images/VictoriaDiroPhoto.jpeg';
// import GoogleAnalytics from './skills_icons/google-analytics.png';
import './Main.css';

class Main extends React.Component {
  render () {
    return (
      <div className="main__container">
        {/* <div className="avatar" style={{ backgroundImage: `url(${VictoriaDiro})` }} alt=""></div> */}

        <p className="description">Enamorada del mundo cinematográfico luché mucho por hacerme un hueco en cualquier rodaje que llegara a mis oídos, trabajando de sol a sol. 
      
        Ahora, años después, he decidido reinventarme como Front-End Developer y aprovechar así, las competencias adquiridas como esfuerzo, adaptación a nuevos entornos y trabajo en equipo. 
      
        Además de esto, soy una persona muy organizada a la que le gusta la planificación de tareas y sociable.</p>

        <div className="skills__project-container">
          <h2 className="skills__title">Mis Habilidades</h2>
          <div className="skills__container">

            {/* <!--MARKETING--> */}
            {/* <div className="analytics" style={{ backgroundImage: `url(${Analytics})` }} alt=""></div> */}
            {/* <div className="adwords" style={{ backgroundImage: `url(${Adwords})` }} alt=""></div> */}
            {/* <div className="wordpress" style={{ backgroundImage: `url(${Wordpress})` }} alt=""></div> */}
            {/* <div className="pestashop" style={{ backgroundImage: `url(${Prestashop})` }} alt=""></div> */}

            {/* <!--AUDIOVISUALES--> */}
            {/* <div className="office" style={{ backgroundImage: `url(${Office})` }} alt=""></div> */}
            {/* <div className="photoshop" style={{ backgroundImage: `url(${Photoshop})` }} alt=""></div> */}
            {/* <div className="illustrator" style={{ backgroundImage: `url(${Illustrator})` }} alt=""></div> */}
            {/* <div className="premiere" style={{ backgroundImage: `url(${Premiere})` }} alt=""></div> */}

            {/* <!--PROGRAMACIÓN--> */}
            {/* <img className="skills__item html5" src="img/skills_icons/html5.png" alt="html5"/>
            <img className="skills__item css3" src="img/skills_icons/css3.png" alt="css3"/>
            <img className="skills__item javascript" src="img/skills_icons/javascript.png" alt="javascript"/>
            <img className="skills__item react" src="img/skills_icons/react.png" alt="react"/> */}

            {/* <!--COMUNICACIÓN--> */}
            {/* <img class="skills__item slack" src="img/skills_icons/slack.png" alt="slack"/>
            <img className="skills__item trello" src="img/skills_icons/trello.png" alt="trello"/>
            <img className="skills__item github" src="img/skills_icons/github.png" alt="github"/>
            <img className="skills__item gitlab" src="img/skills_icons/gitlab.png" alt="gitlab"/> */}
 
          </div>
          
          <h2 className="proyects">Mis Proyectos</h2>
          <div className="projects__container">

            <div style={{ backgroundImage: `url(${"https://via.placeholder.com/250x150/0000FF/808080?Text=hola"})` }} alt="" className="project__item-1"/>
            <div style={{ backgroundImage: `url(${"https://via.placeholder.com/250x150/0000FF/808080?Text=hola"})` }} alt="" className="project__item-1"/>
            <div style={{ backgroundImage: `url(${"https://via.placeholder.com/250x150/0000FF/808080?Text=hola"})` }} alt="" className="project__item-1"/>
            <div style={{ backgroundImage: `url(${"https://via.placeholder.com/250x150/0000FF/808080?Text=hola"})` }} alt="" className="project__item-1"/>
            <div style={{ backgroundImage: `url(${"https://via.placeholder.com/250x150/0000FF/808080?Text=hola"})` }} alt="" className="project__item-1"/>
            <div style={{ backgroundImage: `url(${"https://via.placeholder.com/250x150/0000FF/808080?Text=hola"})` }} alt="" className="project__item-1"/>
        
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
