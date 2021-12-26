import React from 'react';
import data from "../../services/courses.json";
import './Courses.scss';

class Courses extends React.Component {
  render () {

    function openNewWindow (filePath) {
      const otherWindow = window.open();
      otherWindow.opener = null;
      otherWindow.location = filePath;
    }

    return (

      <div className="courses__container">

        <p>Sigo formándome</p>

        <div className="courses__content">

          {data.courses.map((item, index) => (

              <div>
                <li className="courses__item">
                  <h4 className="courses__title">{item.title}</h4>
                  <h5 className="courses__company">{item.school}</h5>
                  <div className="button__text">
                    <span className="courses__time">{item.time}</span>
                    <div onClick={() => openNewWindow(item.certificate)}>
                      <i className="far fa-eye"></i>
                    </div>
                  </div>
                </li>
              </div>
            ))
          }
        </div>


      </div>

    )
  }
}

export default Courses;
