import React from 'react';
import data from "../../services/more-courses.json";
import './OtherCourses.scss';

class OtherCourses extends React.Component {
  render () {
    return data.courses.map((item, index) => (
    <li className="othercourses__item" key={index}>
      <h4 className="othercourses__title">{item.title}</h4>
      <h5 className="othercourses__company">{item.school}</h5>
      <span className="othercourses__time">{item.time}</span>
      <a href={item.certificate} target="_blank">Certificado</a>
    </li>
    ))
  }
}

export default OtherCourses;
