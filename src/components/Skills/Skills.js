import React from 'react';
import './Skills.scss';

// LOGOS

import prestashop from '../../assets/images/skills-icons/prestashop.png';
import adobePhotoshop from '../../assets/images/skills-icons/photoshop.png';
import adobePremiere from '../../assets/images/skills-icons/premiere.png';
import adobeXD from '../../assets/images/skills-icons/adobexd.jpeg';
import aem from '../../assets/images/skills-icons/adobe-experience-manager.png';
import figma from '../../assets/images/skills-icons/figma.png';
import liferay from '../../assets/images/skills-icons/liferay.png';
import zeplin from '../../assets/images/skills-icons/zeplin.png';

class Skills extends React.Component {
  render () {
    return (
      <div className="skills__container">
        <div className="skills__content">

          <i className="fab fa-html5 skill__item-fa" title="HTML5"></i>
          <i className="fab fa-css3-alt skill__item-fa" title="CSS3"></i>
          <i className="fab fa-sass skill__item-fa" title="Sass"></i>
          <i className="fab fa-less skill__item-fa" title="Less"></i>
          <i className="fab fa-bootstrap skill__item-fa" title="Boostrap"></i>
          <i className="fab fa-js-square skill__item-fa" title="JavaScript"></i>
          <i className="fab fa-react skill__item-fa" title="ReactJs"></i>
          <i className="fab fa-angular skill__item-fa" title="Angular"></i>
          <i className="fab fa-wordpress skill__item-fa" title="Wordpress"></i>

          <img className="skill__item" src={prestashop} alt="Prestashop" title="PrestaShop" />
          <img className="skill__item" src={adobePhotoshop} alt="Adobe Photoshop" title="Adobe Photoshop" />
          <img className="skill__item" src={adobePremiere} alt="Adobe Premiere" title="Adobe Premiere" />
          <img className="skill__item" src={adobeXD} alt="Adobe XD" title="Adobe XD" />
          <img className="skill__item" src={aem} alt="Adobe Experience Manager" title="Adobe Experience Manager" />
          <img className="skill__item" src={figma} alt="Figma" title="Figma" />
          <img className="skill__item" src={zeplin} alt="Zeplin" title="Zeplin" />
          <img className="skill__item" src={liferay} alt="Liferay" title="Liferay" />


        </div>
      </div>
    )
  }
}

export default Skills;
