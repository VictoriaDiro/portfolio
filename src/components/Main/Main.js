import React from 'react';
import './Main.scss';

// COMPONENTS

import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import CV from '../CV/CV';
import Courses from '../Courses/Courses';

class Main extends React.Component {
  render () {
    return (

      <div className="main__container">
        <div className="main__content">
          <div className="main__background"></div>
          <p className="main__title">Maquetación web & UX/UI</p>
        </div>

        <Skills />

        <div className="main__title__container">
          <div className="left__line"></div>
          <p>Proyectos</p>
          <div className="right__line"></div>
        </div>
        <Projects />

        <div className="main__title__container title__about__me">
          <div className="left__line"></div>
          <p>Sobre mi</p>
          <div className="right__line"></div>
        </div>
        <CV />

        <div className="main__title__container">
          <div className="left__line"></div>
          <p>Sigo formándome</p>
          <div className="right__line"></div>
        </div>
        <Courses />

      </div>
    )
  }
}

export default Main;
