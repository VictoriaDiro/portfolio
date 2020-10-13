import React from 'react';
import data from "../../services/cv.json";
import './Jobs.scss';

class Jobs extends React.Component {

  render () {

    function handleClick(e) {
      e.preventDefault();
      e.target.parentNode.childNodes[1].classList.toggle("hidden-class");
    }

    return (

      <div className="jobs__container">
      {data.jobs.map((item, index) => (

      <div id={index} className="job__item" key={index}>

        <div className="job__header" id={`headingJob${index}`} onClick={handleClick}>
          {item.title}
        </div>

        <div className="job__body hidden-class">
          <h5 className="job__company">{item.company}</h5>
          <span className="job__time">{item.time}</span>
          <ul className="job__skills">
            {item.skills.map((value, id) => <li className="job__skills__item" key={id}>{value}</li>)}
          </ul>
        </div>
      </div>

      ))}
    </div>
    )
  }
}

export default Jobs;
