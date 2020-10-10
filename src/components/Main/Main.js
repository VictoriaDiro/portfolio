import React from 'react';
import './Main.scss';

// COMPONENTS

import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import CV from '../CV/CV';

class Main extends React.Component {
  render () {
    return (
      <div className="main-container">
        <div className="main-content">
          <div className="main-background"></div>
          <p className="main-item main-title">Maquetación web & UX/UI</p>
          <p className="main-item main-subtitle">HTML, CSS, Sass, JavaScript, React</p>
        </div>

        <Skills />
        <Projects />
        <CV />
      </div>
    )
  }
}

export default Main;
