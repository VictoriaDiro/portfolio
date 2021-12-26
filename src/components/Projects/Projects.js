import React from 'react';
import './Projects.scss';

// Images
import angularPopup from '../../assets/images/projects/example-angular-popup.png';
import phoneCompany from '../../assets/images/projects/phone-company.png';
import gris from '../../assets/images/projects/gris.png';
import patientManager from '../../assets/images/projects/patient-manager.png';
import kairectorio from '../../assets/images/projects/kairectorio.png';
// import wildcards from '../../assets/images/projects/wildcards.png';
import anonymousProxy from '../../assets/images/projects/anonymous-proxy.png';

class Projects extends React.Component {
  render () {

    return (
      <div className="projects__container">

        <div className="projects__item">
          <a target="_black" href="https://example-angular-popup.netlify.app/">
            <img src={angularPopup} alt="Example Angular Popup" />
          </a>
        </div>
        <div className="projects__item">
          <a target="_black" href="https://phone-company.netlify.app/">
            <img src={phoneCompany} alt="Phone Company" />
          </a>
        </div>
        <div className="projects__item">
          <a target="_black" href="https://gris.netlify.app/#/">
            <img src={gris} alt="Gris" />
          </a>
        </div>
        <div className="projects__item">
          <a target="_black" href="https://patient-manager.netlify.app/">
            <img src={patientManager} alt="Patient Manager" />
          </a>
        </div>
        <div className="projects__item">
          <a target="_black" href="https://kairectorio.netlify.app/#/">
            <img src={kairectorio} alt="Kairectorio" />
          </a>
        </div>

        <div className="projects__item">
          <a target="_black" href="https://anonymous-proxy.netlify.app/">
            <img src={anonymousProxy} alt="Anonymous Proxy" />
          </a>
        </div>

        {/*
        <div className="projects__item">
          <a target="_black" href="http://beta.adalab.es/fairfax-m2-wildcards/">
            <img src={wildcards} alt="Wildcards" />
          </a>
        </div>
        */}
      </div>
    )
  }
}

export default Projects;
