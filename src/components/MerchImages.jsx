"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
import "swiper/css/zoom";

export default function MerchImages({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
      navigation
      zoom={true}
      className="swiper h-110"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="w-full">
          <div className="swiper-zoom-container ">
            <img src={image} alt={image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
