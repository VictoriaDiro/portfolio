import React from 'react';
import SoloLearnHtml from '../../images/pdfs/18-10-12-html-fundamentals-course.pdf';
import './otherCourses.scss';

class otherCourses extends React.Component {
  render () {
    return (
      <div className="othercourses__container">
          <ul className="othercourses__list">
            <li className="othercourses__item">
              <h4 className="othercourses__title">HTML Fundamentals course · Solo Learn · oct. 2018 - 2h. · <a href={SoloLearnHtml} target="_blank">Ver certificado</a></h4>
            </li>
          </ul>
      </div>
    )
  }
}

export default otherCourses;
