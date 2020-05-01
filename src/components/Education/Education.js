import React from 'react';
import data from "../../services/more-info.json";
import './Education.scss';

class Education extends React.Component {
  render () {
    return data.education.map((item, index) => (
    <li className="education__item" key={index}>
      <h4 className="education__title">{item.title}</h4>
      <h5 className="education__company">{item.school}</h5>
      <span className="education__time">{item.time}</span>
      <ul className="education__skills">
        {item.skills.map((value, id) => <li className="education__skills__item" key={id}>{value}</li>)}
      </ul>
    </li>
    ))
  }
}

export default Education;
