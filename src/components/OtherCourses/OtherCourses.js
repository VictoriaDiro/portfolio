import React from 'react';
import data from "../../services/more-courses.json";
import './OtherCourses.scss';

class OtherCourses extends React.Component {
  render () {
    return (
    <ul className="othercourses__container">
      {data.courses.map((item, index) => (
        <li className="courses__item" key={index}>
          <h4 className="courses__title">{item.title}</h4>
          <h5 className="courses__school">{item.school}
            <i class="fas fa-code"></i>
            <span className="courses__time">{item.time}</span>
          </h5>
          <a className="courses__certificate" href={item.certificate} target="_blank">Certificado</a>
        </li>
      ))}
    </ul>
    )
  }
}

export default OtherCourses;
