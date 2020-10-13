import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../../services/courses.json";
import './Courses.scss';

class Courses extends React.Component {
  render () {

    return (

      <div className="courses__container">

        <Swiper
          className="swiper__container"
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {data.courses.map((item, index) => (

            <SwiperSlide>

              <li className="courses__item" key={index}>
                <h4 className="courses__title">{item.title}</h4>
                <h5 className="courses__company">{item.school}</h5>
                <span className="courses__time">{item.time}</span>
                <a href={item.certificate}>
                  <i className="fas fa-download"></i>
                </a>
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
