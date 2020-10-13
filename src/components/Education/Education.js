import React from 'react';
import data from "../../services/cv.json";
import './Education.scss';

class Education extends React.Component {

  render () {

    function handleClick(e) {
      e.preventDefault();
      e.target.parentNode.childNodes[1].classList.toggle("hidden-class");
    }

    return (

      <div className="education__container">
      {data.education.map((item, index) => (

      <div id={index} className="education__item" key={index}>

        <div className="education__header" id={`headingJob${index}`} onClick={handleClick}>
          {item.title}
        </div>

        <div className="eduction__body hidden-class">
          <h5 className="education__company">{item.school}</h5>
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

export default Education;
