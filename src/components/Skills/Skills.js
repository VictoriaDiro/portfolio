import React from 'react';
import './Skills.scss';

// LOGOS

import prestashop from '../../assets/images/skills-icons/prestashop.png';
import adobePhotoshop from '../../assets/images/skills-icons/adobe-photoshop.png';
import adobePremiere from '../../assets/images/skills-icons/adobe-premiere.png';
import adobeXD from '../../assets/images/skills-icons/adobe-xd.png';
import figma from '../../assets/images/skills-icons/figma.png';
import zeplin from '../../assets/images/skills-icons/zeplin.png';

class Skills extends React.Component {
  render () {
    return (
      <div className="skills__container">
        <div className="skills__content">

          <i className="fab fa-html5 skill__item-fa"></i>
          <i className="fab fa-css3-alt skill__item-fa"></i>
          <i className="fab fa-sass skill__item-fa"></i>
          <i className="fab fa-less skill__item-fa"></i>
          <i className="fab fa-bootstrap skill__item-fa"></i>
          <i className="fab fa-js-square skill__item-fa"></i>
          <i className="fab fa-react skill__item-fa"></i>
          <i className="fab fa-angular skill__item-fa"></i>
          <i className="fab fa-wordpress skill__item-fa"></i>

          <img className="skill__item" src={prestashop} alt="Prestashop" />
          <img className="skill__item" src={adobePhotoshop} alt="Adobe Photoshop" />
          <img className="skill__item" src={adobePremiere} alt="Adobe Premiere" />
          <img className="skill__item" src={adobeXD} alt="Adobe XD" />
          <img className="skill__item" src={figma} alt="Adobe XD" />
          <img className="skill__item" src={zeplin} alt="Adobe XD" />

        </div>
      </div>
    )
  }
}

export default Skills;
