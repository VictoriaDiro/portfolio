import React from 'react';
import data from "../../services/more-info.json";
import './Jobs.scss';

class Jobs extends React.Component {
  render () {
    return data.jobs.map((item, index) => (

    <div className="accordion jobs__container" id="accordionElement" key={index}>
      <div className="card education__item">
        <div className="card-header" id={`headingJob${index}`}>
          <h2 className={`mb-job${index} education__title`}>
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapseJob${index}`} aria-expanded="true" aria-controls={`collapseJob${index}`}>
              {item.title}
            </button>
          </h2>
          <h5 className="education__company">{item.school}</h5>
          <span className="education__time">{item.time}</span>
        </div>
        <div id={`collapseJob${index}`} className="collapse show" aria-labelledby={`headingJob${index}`} data-parent="#accordionElement">
          <div className="card-body">
          <ul className="education__skills">
            {item.skills.map((value, id) => <li className="education__skills__item" key={id}>{value}</li>)}
          </ul>
          </div>
        </div>
      </div>
    </div>

    ))
  }
}

export default Jobs;
