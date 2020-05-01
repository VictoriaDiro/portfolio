import React from 'react';
import Jobs from "../Jobs/Jobs";
import Education from "../Education/Education";
import './MoreInfo.scss';

class MoreInfo extends React.Component {
  render () {
      return (
        <div className="moreinfo__container">
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

export default MoreInfo;
