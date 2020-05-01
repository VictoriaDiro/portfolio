import React from 'react';
import data from "../../services/more-info.json";
import './Jobs.scss';

class MoreInfo extends React.Component {
  render () {
    return data.jobs.map((item, index) => (
    <li className="job__item" key={index}>
      <h4 className="job__title">{item.title}</h4>
      <h5 className="job__company">{item.company}</h5>
      <span className="job__time">{item.time}</span>
      <ul className="job__skills">
        {item.skills.map((value, id) => <li className="job__skills__item" key={id}>{value}</li>)}
      </ul>
    </li>
    ))
  }
}

export default MoreInfo;
