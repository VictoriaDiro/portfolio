import React from 'react';
import Jobs from "../Jobs/Jobs";
import Education from "../Education/Education";
import './CV.scss';

class CV extends React.Component {
  render () {
      return (
      <div className="cv__container">
        <div className="jobs__container">
          <h2 className="jobs__title">Laboral</h2>
          <ul className="jobs__list">
            <Jobs />
          </ul>
        </div>
        <div className="education__container">
          <h2 className="education__title">Formación</h2>
          <ul className="education__list">
            <Education />
          </ul>
        </div>
      </div>
    )
  }
}

export default CV;
