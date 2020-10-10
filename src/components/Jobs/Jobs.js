import React from 'react';
import data from "../../services/more-info.json";
import './Jobs.scss';

class Jobs extends React.Component {

  render () {

    function handleClick(e) {
      e.preventDefault();
      e.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden-class");
    }

    return (

      <div className="jobs__container">
      {data.jobs.map((item, index) => (

      <div id={index} className="education__item" key={index}>

        <div className="card-header" id={`headingJob${index}`}>
          <button className="jobs__button" type="button" onClick={handleClick}>
            {item.title}
          </button>
        </div>

        <div className="card-body">
          <h5 className="education__company">{item.company}</h5>
          <span className="education__time">{item.time}</span>
          <ul className="education__skills">
            {item.skills.map((value, id) => <li className="education__skills__item" key={id}>{value}</li>)}
          </ul>
        </div>
      </div>

      ))}
    </div>
    )
  }
}

export default Jobs;
