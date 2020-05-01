import React from 'react';
import data from "../../services/more-courses.json";
import './OtherCourses.scss';

class OtherCourses extends React.Component {
  render () {
    return data.courses.map((item, index) => (
    <li className="education__item" key={index}>
      <h4 className="education__title">{item.title}</h4>
      <h5 className="education__company">{item.school}</h5>
      <span className="education__time">{item.time}</span>
      <a href={item.certificate} target="_blank">Certificado</a>
    </li>
    ))
  }
}

export default OtherCourses;
