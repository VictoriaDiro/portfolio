import React from 'react';
import './Main.scss';

// Component
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import CV from '../CV/CV';

// Logos
import Osoco from '../../assets/images/enterprises/osoco.png';
import Telefonica from '../../assets/images/enterprises/telefonica.png';
import Sygris from '../../assets/images/enterprises/sygris.svg';
import Vass from '../../assets/images/enterprises/vass.png';

class Main extends React.Component {
  render () {
    return (

      <div className="main__container">
        <div className="main__content">
          <div className="main__background"></div>
          <p className="main__title">Maquetación web & UX/UI</p>
        </div>

        <div className="description__container">
          <h3>Hola, soy Victoria Díaz</h3>
          <p>Comencé mi viaje en el mundo audiovisual, rodeada de focos y cámaras. Poco a poco, empecé a investigar en el mundo web, tratar de traducir que hacían esos códigos que veía en el inspector. Poco a poco la curiosidad me atrapó y hace tres años realicé un bootcamp en programación Frontend, desde entonces me he centrado en la maquetación y poco a poco me voy formando en el ámbito del UX/UI.</p>
        </div>

        <div className="main__title__container">
          <div className="left__line"></div>
          <p>Algunos de mis proyectos</p>
          <div className="right__line"></div>
        </div>
        <Projects />

        <div className="main__title__container title__about__me">
          <div className="left__line"></div>
          <p>Sobre mi</p>
          <div className="right__line"></div>
        </div>
        <CV />

        <div className="main__title__container title__skills">
          <div className="left__line"></div>
          <p>Skills</p>
          <div className="right__line"></div>
        </div>
        <Skills />

        <div className="main__title__container title__skills">
          <div className="left__line"></div>
          <p>Empresas en las que he trabajado</p>
          <div className="right__line"></div>
        </div>
        <div className="enterprises__container">
          <img src={Osoco} alt="Osoco"></img>
          <img className="telefonica__logo" src={Telefonica} alt="Telefonica"></img>
          <img src={Sygris} alt="Sygris"></img>
          <img className="vass__logo" src={Vass} alt="Vass"></img>
        </div>
      </div>
    )
  }
}

export default Main;
