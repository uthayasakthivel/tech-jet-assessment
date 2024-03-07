import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../../App.css"
import "./style.css"
import Macbook from "../../assets/macbook.png"
import slide1 from "../../assets/slide1.png"
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import slide4 from "../../assets/slide4.png"
import slide5 from "../../assets/slide5.png"
import slide6 from "../../assets/slide6.png"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

export default function App() {
  const customPagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }
  return (
    <>
      <div className="center-image">
        <img src={Macbook} alt="" />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        effect="fade"
        loop={true}
        pagination={customPagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className="slide3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className="slide4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="slide5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" className="slide6" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
