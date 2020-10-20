import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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

          {data.courses.map((item, index) => (

            <SwiperSlide key={index}>

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

              </SwiperSlide>

            ))
          }
        </Swiper>

      </div>

    )
  }
}

export default Courses;
