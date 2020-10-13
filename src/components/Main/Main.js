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
        <Projects />
        <CV />
          <Courses />

      </div>
    )
  }
}

export default Main;
