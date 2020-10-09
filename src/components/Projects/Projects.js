import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Projects.scss';

class Projects extends React.Component {
  render () {
    return (
      <div className="projects__container">
        <Swiper
          className="swiper__container"
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <a className="projects__item" href="https://mupalasa.netlify.app/#/">
              <img src="https://via.placeholder.com/300x200/fabada/808080" alt="project-icon" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" href="https://mupalasa.netlify.app/#/">
              <img src="https://via.placeholder.com/300x200/fabada/808080" alt="project-icon" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" href="https://mupalasa.netlify.app/#/">
              <img src="https://via.placeholder.com/300x200/fabada/808080" alt="project-icon" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="projects__item" href="https://mupalasa.netlify.app/#/">
              <img src="https://via.placeholder.com/300x200/fabada/808080" alt="project-icon" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }
}

export default Projects;
