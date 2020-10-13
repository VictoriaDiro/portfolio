import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Projects.scss';

// IMAGES

import angularPopup from '../../assets/images/projects/example-angular-popup.png';
import phoneCompany from '../../assets/images/projects/phone-company.png';
import gris from '../../assets/images/projects/gris.png';
import patientManager from '../../assets/images/projects/patient-manager.png';
import kairectorio from '../../assets/images/projects/kairectorio.png';
import wildcards from '../../assets/images/projects/wildcards.png';
import anonymousProxy from '../../assets/images/projects/anonymous-proxy.png';

class Projects extends React.Component {
  render () {

    return (
      <div className="projects__container">
        <div className="arrow__container">
          <i className="fas fa-angle-double-right" />
        </div>
        <Swiper
          className="swiper__container"
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide>
            <a className="projects__item" target="_black" href="https://example-angular-popup.netlify.app/">
              <img src={angularPopup} alt="Example Angular Popup" />
            </a>
            <p>HTML, Sass, Angular</p>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" target="_black" href="https://phone-company.netlify.app/">
              <img src={phoneCompany} alt="Phone Company" />
            </a>
            <p>HTML, Sass, ReactJs</p>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" target="_black" href="https://gris.netlify.app/#/">
              <img src={gris} alt="Gris" />
            </a>
            <p>HTML, Sass, Bootstrap, ReactJs</p>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" target="_black" href="https://patient-manager.netlify.app/">
              <img src={patientManager} alt="Patient Manager" />
            </a>
            <p>HTML, Sass, ReactJs, Hooks, Redux</p>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" target="_black" href="https://kairectorio.netlify.app/#/">
              <img src={kairectorio} alt="Kairectorio" />
            </a>
            <p>HTML, Sass, ReactJs</p>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" target="_black" href="beta.adalab.es/fairfax-m2-wildcards/">
              <img src={wildcards} alt="Wildcards" />
            </a>
            <p>HTML, Sass, ReactJs</p>
          </SwiperSlide>
          <SwiperSlide>
          <a className="projects__item" target="_black" href="https://anonymous-proxy.netlify.app/">
              <img src={anonymousProxy} alt="Anonymous Proxy" />
            </a>
            <p>HTML, CSS</p>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }
}

export default Projects;
