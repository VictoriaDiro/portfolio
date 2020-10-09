import React from 'react';
import data from "../../services/more-info.json";
import './Education.scss';

class Education extends React.Component {
  render () {
    return data.education.map((item, index) => (

      <div className="accordion education__container" id="accordionElement" key={index}>
        <div className="card education__item">
          <div className="card-header" id={`headingEdu${index}`}>
            <h2 className={`mb-edu${index} education__title`}>
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapseEdu${index}`} aria-expanded="true" aria-controls={`collapseEdu${index}`}>
                {item.title}
              </button>
            </h2>
            <h5 className="education__company">{item.school}</h5>
            <span className="education__time">{item.time}</span>
          </div>
          <div id={`collapseEdu${index}`} className="collapse show" aria-labelledby={`headingEdu${index}`} data-parent="#accordionElement">
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

export default Education;
